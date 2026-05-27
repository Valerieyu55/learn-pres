document.addEventListener('DOMContentLoaded', () => {
    // --- State Initialization ---
    let presentations = getPresentations();
    let feedbacks = getFeedbacks();
    let currentEditingId = null;

    // --- History State ---
    let historyStack = [];
    let redoStack = [];
    const MAX_HISTORY = 20;

    function pushHistory() {
        historyStack.push(JSON.stringify(presentations));
        if (historyStack.length > MAX_HISTORY) {
            historyStack.shift();
        }
        redoStack = [];
        updateHistoryButtons();
    }

    function undoAction() {
        if (historyStack.length > 0) {
            redoStack.push(JSON.stringify(presentations));
            const prevStateStr = historyStack.pop();
            presentations = JSON.parse(prevStateStr);
            savePresentations(presentations);
            renderBoard();
            updateHistoryButtons();
        }
    }

    function redoAction() {
        if (redoStack.length > 0) {
            historyStack.push(JSON.stringify(presentations));
            const nextStateStr = redoStack.pop();
            presentations = JSON.parse(nextStateStr);
            savePresentations(presentations);
            renderBoard();
            updateHistoryButtons();
        }
    }

    function updateHistoryButtons() {
        const btnUndo = document.getElementById('btn-undo');
        const btnRedo = document.getElementById('btn-redo');
        if (btnUndo) {
            if (historyStack.length > 0) {
                btnUndo.disabled = false;
                btnUndo.style.cursor = 'pointer';
                btnUndo.style.color = 'var(--primary)';
            } else {
                btnUndo.disabled = true;
                btnUndo.style.cursor = 'not-allowed';
                btnUndo.style.color = '#D1D5DB';
            }
        }
        if (btnRedo) {
            if (redoStack.length > 0) {
                btnRedo.disabled = false;
                btnRedo.style.cursor = 'pointer';
                btnRedo.style.color = 'var(--primary)';
            } else {
                btnRedo.disabled = true;
                btnRedo.style.cursor = 'not-allowed';
                btnRedo.style.color = '#D1D5DB';
            }
        }
    }

    // --- DOM Elements ---
    // Sidebar Tabs
    const navItems = document.querySelectorAll('.nav-item');
    const viewPanels = document.querySelectorAll('.view-panel');
    
    // Stats
    const statTotal = document.getElementById('stat-total');
    const statCompleted = document.getElementById('stat-completed');
    const statPending = document.getElementById('stat-pending');
    const statDelayed = document.getElementById('stat-delayed');

    // Modal
    const commentModal = document.getElementById('comment-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const modalSaveBtn = document.getElementById('modal-save-btn');
    const modalTopic = document.getElementById('modal-topic-input');
    const modalCategory = document.getElementById('modal-category-select');
    const modalPresenters = document.getElementById('modal-presenters');
    const modalSessionSelect = document.getElementById('modal-session-select');
    const modalComment = document.getElementById('modal-comment');



    // System Action Buttons
    const btnImportCsv = document.getElementById('btn-import-csv');
    const csvFileInput = document.getElementById('csv-file-input');
    const btnExportCsv = document.getElementById('btn-export-csv');
    const btnUndo = document.getElementById('btn-undo');
    const btnRedo = document.getElementById('btn-redo');

    if (btnUndo) btnUndo.addEventListener('click', undoAction);
    if (btnRedo) btnRedo.addEventListener('click', redoAction);

    // Session Schedule settings
    const sessionDateInputs = document.querySelectorAll('.session-date-input');
    const sessionLocInputs = document.querySelectorAll('.session-loc-input');
    
    sessionDateInputs.forEach(input => {
        const session = input.dataset.session;
        input.value = localStorage.getItem(`scheduleDate_${session}`) || '';
        input.addEventListener('change', () => localStorage.setItem(`scheduleDate_${session}`, input.value));
    });
    
    sessionLocInputs.forEach(input => {
        const session = input.dataset.session;
        input.value = localStorage.getItem(`scheduleLoc_${session}`) || '';
        input.addEventListener('input', () => localStorage.setItem(`scheduleLoc_${session}`, input.value));
    });
    
    // --- Sidebar Toggle Logic ---
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', () => {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('collapsed');
        });
    }

    // --- Tab Switch Logic ---
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            viewPanels.forEach(panel => panel.classList.remove('active'));
            
            item.classList.add('active');
            const targetView = item.getAttribute('data-view');
            document.getElementById(targetView).classList.add('active');
        });
    });

    // --- Kanban Search Logic ---
    const kanbanSearchInput = document.getElementById('kanban-search');
    function applySearchFilter() {
        if (!kanbanSearchInput) return;
        const query = kanbanSearchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.kanban-board .presentation-card');
        cards.forEach(card => {
            if (!query) {
                card.style.display = 'block';
                return;
            }
            const topic = card.querySelector('.card-title').textContent.toLowerCase();
            const presenters = card.querySelector('.card-desc span').textContent.toLowerCase();
            if (topic.includes(query) || presenters.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (kanbanSearchInput) {
        kanbanSearchInput.addEventListener('input', applySearchFilter);
    }

    // --- Render Kanban Board & Stats ---
    function renderBoard() {
        const columns = document.querySelectorAll('.column-body');
        columns.forEach(col => col.innerHTML = ''); // Clear old content

        const sessionCounters = {0: 1, 1: 1, 2: 1, 3: 1, 4: 1};

        // Populate backup class filter dropdown if needed
        const backupClassSelect = document.getElementById('backup-class-select');
        const classes = new Set();

        presentations.forEach(p => {
            const match = p.presenters.match(/^\[([^\]]+)\]/);
            if (match) classes.add(match[1]);

            const seq = sessionCounters[p.session]++;
            const card = createCard(p, seq);
            const col = document.querySelector(`.kanban-column[data-session="${p.session}"] .column-body`);
            if (col) {
                // Add class info to card dataset for filtering later
                if (p.session === 0 && match) {
                    card.dataset.class = match[1];
                }
                col.appendChild(card);
            }
        });

        // Update dropdown options
        if (backupClassSelect) {
            const currentVal = backupClassSelect.value;
            backupClassSelect.innerHTML = '<option value="all">所有班級</option>';
            Array.from(classes).sort().forEach(cName => {
                const opt = document.createElement('option');
                opt.value = cName;
                opt.textContent = cName + '班';
                backupClassSelect.appendChild(opt);
            });
            // restore selected
            if (Array.from(backupClassSelect.options).some(o => o.value === currentVal)) {
                backupClassSelect.value = currentVal;
            }
        }
        
        // Filter the backup column based on select
        applyBackupClassFilter();

        updateStats();
        updateCounts();
        renderSubmissionStatus();
        
        if (typeof applySearchFilter === 'function') {
            applySearchFilter();
        }
    }
    
    // Add event listener for the backup class filter
    const backupClassSelect = document.getElementById('backup-class-select');
    if (backupClassSelect) {
        backupClassSelect.addEventListener('change', applyBackupClassFilter);
    }
    
    function applyBackupClassFilter() {
        const backupClassSelect = document.getElementById('backup-class-select');
        if (!backupClassSelect) return;
        const selectedClass = backupClassSelect.value;
        const backupCards = document.querySelectorAll('.kanban-column[data-session="0"] .presentation-card');
        backupCards.forEach(card => {
            if (selectedClass === 'all' || card.dataset.class === selectedClass) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function createCard(p, seq) {
        const div = document.createElement('div');
        div.className = `presentation-card status-${p.status}`;
        
        // Highlight recommended card
        if (p.isRecommended) {
            div.style.border = '2px solid #F59E0B';
            div.style.backgroundColor = '#FFFBEB';
            div.style.boxShadow = '0 4px 6px rgba(245, 158, 11, 0.1)';
        }
        
        div.draggable = true;
        div.dataset.id = p.id;

        let statusText = '⏳ 尚未報告';
        if (p.status === 'completed') statusText = '✅ 已完成';
        if (p.status === 'delayed') statusText = '❌ 延誤缺席';
        
        const recommendBtnStyle = p.isRecommended ? 'color: #F59E0B; background-color: #FEF3C7; border: 1px solid #FDE68A;' : 'color: var(--text-muted); background-color: transparent; border: 1px solid var(--border);';
        const recommendBtnText = p.isRecommended ? '已推薦' : '推薦';
        
        const displayTopic = `<span>${p.topic}</span>`;

        div.innerHTML = `
            <div class="card-title">
                <span style="display:inline-block; background-color:var(--accent); color:white; min-width:20px; height:20px; text-align:center; border-radius:10px; font-size:0.75rem; line-height:20px; padding: 0 4px; margin-right:4px; vertical-align: middle; box-shadow: 0 2px 4px rgba(200,159,122,0.3);">${seq}</span>${displayTopic}
                ${p.category ? `<span style="display:inline-block; font-size:0.7rem; background:rgba(168,184,160,0.15); color:#66735e; padding:2px 6px; border-radius:4px; margin-left:6px; border:1px solid rgba(168,184,160,0.3); vertical-align:middle; font-weight:700;">${p.category}</span>` : ''}
                ${p.isRecommended ? '<i class="fa-solid fa-thumbs-up" style="color: #F59E0B; margin-left: 6px; font-size: 0.9rem;" title="優良推薦"></i>' : ''}
            </div>
            <div class="card-desc">
                <i class="fa-solid fa-users"></i>
                <span>${p.presenters.replace(/\[1001\]/g, '<span style="color: #EA580C; font-weight: 700;">[1001]</span>').replace(/\[1002\]/g, '<span style="color: #B91C1C; font-weight: 700;">[1002]</span>')}</span>
            </div>
            <div class="card-footer" style="display: flex; justify-content: space-between; align-items: center;">
                <span class="card-status-badge status-badge-${p.status}">${statusText}</span>
                <div style="display: flex; gap: 0.4rem;">
                    <button class="recommend-btn" data-id="${p.id}" style="${recommendBtnStyle} padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: all 0.2s;" title="標記為優良推薦">
                        <i class="fa-solid fa-thumbs-up"></i> ${recommendBtnText}
                    </button>
                    <button class="edit-btn" data-id="${p.id}" style="padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; background: var(--surface); border: 1px solid var(--border); color: var(--text-dark); cursor: pointer; display: flex; align-items: center; gap: 4px;">
                        <i class="fa-solid fa-pen-to-square"></i> 編輯
                    </button>
                </div>
            </div>
        `;

        // Card events
        div.addEventListener('dragstart', handleDragStart);
        div.addEventListener('dragend', handleDragEnd);

        // Edit button click -> Open Modal
        div.querySelector('.edit-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openEditModal(p.id);
        });
        
        // Recommend button click -> Toggle Recommended
        div.querySelector('.recommend-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            pushHistory();
            p.isRecommended = !p.isRecommended;
            savePresentations(presentations);
            renderBoard();
        });

        // Double click card -> Open Modal
        div.addEventListener('dblclick', () => {
            openEditModal(p.id);
        });

        return div;
    }

    function updateCounts() {
        [0, 1, 2, 3, 4].forEach(session => {
            const col = document.querySelector(`.kanban-column[data-session="${session}"]`);
            if (col) {
                const count = col.querySelectorAll('.presentation-card').length;
                col.querySelector('.count-badge').innerText = count;
            }
        });
    }

    function updateStats() {
        const total = presentations.length;
        const completed = presentations.filter(p => p.status === 'completed').length;
        const delayed = presentations.filter(p => p.status === 'delayed' || p.session === 0).length;
        const pending = total - completed - delayed;

        statTotal.textContent = total;
        statCompleted.textContent = completed;
        statPending.textContent = pending;
        statDelayed.textContent = delayed;
    }

    // --- Modal Logic (編輯彈窗) & Timer ---
    let timerInterval = null;
    let timerSeconds = 0;
    
    const timerDisplay = document.getElementById('timer-display');
    const timerStartBtn = document.getElementById('timer-start-btn');
    const timerPauseBtn = document.getElementById('timer-pause-btn');
    const timerResetBtn = document.getElementById('timer-reset-btn');
    
    function formatTime(sec) {
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = (sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }
    
    function updateTimerDisplay() {
        if(timerDisplay) {
            timerDisplay.textContent = formatTime(timerSeconds);
            if (timerSeconds >= 150) {
                timerDisplay.style.color = 'var(--danger)';
            } else {
                timerDisplay.style.color = 'var(--primary)';
            }
        }
    }
    
    if (timerStartBtn) {
        timerStartBtn.addEventListener('click', () => {
            timerStartBtn.style.display = 'none';
            timerPauseBtn.style.display = 'inline-block';
            timerInterval = setInterval(() => {
                timerSeconds++;
                updateTimerDisplay();
            }, 1000);
        });
    }
    
    if (timerPauseBtn) {
        timerPauseBtn.addEventListener('click', () => {
            timerPauseBtn.style.display = 'none';
            timerStartBtn.style.display = 'inline-block';
            clearInterval(timerInterval);
        });
    }
    
    if (timerResetBtn) {
        timerResetBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            timerSeconds = 0;
            updateTimerDisplay();
            if (timerPauseBtn) timerPauseBtn.style.display = 'none';
            if (timerStartBtn) timerStartBtn.style.display = 'inline-block';
        });
    }

    function openEditModal(id) {
        currentEditingId = id;
        const p = presentations.find(x => x.id === id);
        if (!p) return;

        modalTopic.value = p.topic;
        if (modalCategory) modalCategory.value = p.category && p.category !== '未分類' ? p.category : '未分類';
        modalPresenters.innerHTML = p.presenters.replace(/\[1001\]/g, '<span style="color: #EA580C; font-weight: 700;">[1001]</span>').replace(/\[1002\]/g, '<span style="color: #B91C1C; font-weight: 700;">[1002]</span>');
        modalSessionSelect.value = p.session;
        modalComment.value = p.comment || '';

        // Select correct status radio
        const radios = document.getElementsByName('modal-status');
        radios.forEach(radio => {
            if (radio.value === p.status) {
                radio.checked = true;
            }
        });

        const recommendCheckbox = document.getElementById('modal-recommend-checkbox');
        if (recommendCheckbox) {
            recommendCheckbox.checked = p.isRecommended || false;
        }

        // Init Timer
        timerSeconds = p.duration || 0;
        updateTimerDisplay();
        if (timerInterval) clearInterval(timerInterval);
        if (timerStartBtn) timerStartBtn.style.display = 'inline-block';
        if (timerPauseBtn) timerPauseBtn.style.display = 'none';

        commentModal.classList.add('active');
    }

    function closeEditModal() {
        commentModal.classList.remove('active');
        currentEditingId = null;
        if (timerInterval) clearInterval(timerInterval);
    }

    closeModalBtn.addEventListener('click', closeEditModal);
    modalCancelBtn.addEventListener('click', closeEditModal);
    
    // Close modal when clicking outside the card
    commentModal.addEventListener('click', (e) => {
        if (e.target === commentModal) {
            closeEditModal();
        }
    });

    function saveCurrentEditing() {
        if (!currentEditingId) return false;

        const p = presentations.find(x => x.id === currentEditingId);
        if (p) {
            const selectedSession = parseInt(modalSessionSelect.value);
            const selectedStatus = document.querySelector('input[name="modal-status"]:checked').value;
            
            const specialStudents = ['張廷愷', '陳宜宏', '楊明叡', '江安妤', '吳育宣', '陳子甯', '王宇珩', '吉諺揚', '邱植安', '柳兆剛', '范騰云', '郭聿安', '謝詠煜', '謝雨萱'];
            const isSpecial = specialStudents.some(s => p.presenters.includes(s));
            // Allow special students to be delayed (session 0)
            let finalSession = selectedSession;
            if (selectedStatus === 'delayed') finalSession = 0;
            
            if (isSpecial && finalSession !== 2 && finalSession !== 4 && finalSession !== 0) {
                alert('注意：此組別包含特定名單學生，只能安排在第2節或第4節！');
                return false;
            }

            pushHistory();

            const commentVal = modalComment.value;
            const newTopic = modalTopic.value.trim();
            const newCategory = modalCategory ? modalCategory.value : p.category;

            const recommendCheckbox = document.getElementById('modal-recommend-checkbox');
            if (recommendCheckbox) {
                p.isRecommended = recommendCheckbox.checked;
            }

            if (newTopic) {
                p.topic = newTopic;
            }
            p.category = newCategory;
            p.session = finalSession;
            p.status = selectedStatus;
            p.comment = commentVal;
            p.duration = timerSeconds;

            if (p.session !== 0 && p.status === 'delayed') {
                p.status = 'pending';
            }

            savePresentations(presentations);
            renderBoard();
            renderTeacherFeedbacks();
            return true;
        }
        return false;
    }

    const modalRecommendCheckbox = document.getElementById('modal-recommend-checkbox');
    if (modalRecommendCheckbox) {
        modalRecommendCheckbox.addEventListener('change', () => {
            if (currentEditingId) {
                const p = presentations.find(x => x.id === currentEditingId);
                if (p) {
                    pushHistory();
                    p.isRecommended = modalRecommendCheckbox.checked;
                    savePresentations(presentations);
                    renderBoard();
                    renderTeacherFeedbacks();
                }
            }
        });
    }

    modalSaveBtn.addEventListener('click', () => {
        if (saveCurrentEditing()) {
            closeEditModal();
        }
    });

    const modalSaveNextBtn = document.getElementById('modal-save-next-btn');
    if (modalSaveNextBtn) {
        modalSaveNextBtn.addEventListener('click', () => {
            if (saveCurrentEditing()) {
                // Find next
                let found = false;
                let nextId = null;
                for (let i = 0; i < presentations.length; i++) {
                    if (presentations[i].id === currentEditingId) {
                        if (i + 1 < presentations.length) {
                            nextId = presentations[i + 1].id;
                        }
                        break;
                    }
                }
                
                if (nextId) {
                    openEditModal(nextId);
                } else {
                    alert('已經是最後一組了！');
                    closeEditModal();
                }
            }
        });
    }

    const statusRadios = document.getElementsByName('modal-status');
    statusRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'delayed') {
                modalSessionSelect.value = "0";
            }
        });
    });

    // --- Drag and Drop Logic ---
    let draggedCard = null;

    function handleDragStart(e) {
        draggedCard = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.dataset.id);
    }

    function handleDragEnd() {
        this.classList.remove('dragging');
        draggedCard = null;
    }

    function setupDropZone(container) {
        if (container.hasAttribute('data-drop-setup')) return;
        container.setAttribute('data-drop-setup', 'true');
        
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (draggable) {
                if (afterElement == null) {
                    container.appendChild(draggable);
                } else {
                    container.insertBefore(draggable, afterElement);
                }
            }
        });

        container.addEventListener('drop', e => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            const newSession = parseInt(container.closest('.kanban-column').dataset.session);
            
            const p = presentations.find(x => x.id === id);
            if (p) {
                const specialStudents = ['張廷愷', '陳宜宏', '楊明叡', '江安妤', '吳育宣', '陳子甯', '王宇珩', '吉諺揚', '邱植安', '柳兆剛', '范騰云', '郭聿安', '謝詠煜', '謝雨萱'];
                const isSpecial = specialStudents.some(s => p.presenters.includes(s));
                if (isSpecial && newSession !== 2 && newSession !== 4) {
                    alert('注意：此組別包含特定名單學生，只能安排在第2節或第4節！');
                    renderBoard(); // reset UI
                    return;
                }

                pushHistory();

                p.session = newSession;

                // Auto status change depending on column
                if (newSession === 0) {
                    p.status = 'delayed';
                } else if (p.status === 'delayed') {
                    p.status = 'pending';
                }

                // Reorder presentations array based on new DOM order
                const newPresentationsOrder = [];
                
                document.querySelectorAll('.kanban-column').forEach(col => {
                    const cards = col.querySelectorAll('.presentation-card');
                    cards.forEach(card => {
                        const cardId = card.dataset.id;
                        const cardData = presentations.find(x => x.id === cardId);
                        if (cardData) {
                            newPresentationsOrder.push(cardData);
                        }
                    });
                });
                
                presentations.forEach(cardData => {
                    if (!newPresentationsOrder.includes(cardData)) {
                        newPresentationsOrder.push(cardData);
                    }
                });
                
                presentations = newPresentationsOrder;
                savePresentations(presentations);
                renderBoard();
            }
        });
    }

    const dragContainers = document.querySelectorAll('.column-body');
    dragContainers.forEach(container => {
        setupDropZone(container);
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.presentation-card:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }



    const teacherWallFilter = document.getElementById('teacher-wall-session-filter');
    if (teacherWallFilter) {
        teacherWallFilter.addEventListener('change', renderTeacherFeedbacks);
    }

    function renderTeacherFeedbacks() {
        const grid = document.getElementById('teacher-feedback-grid');
        grid.innerHTML = '';

        let activeFeedbacks = [...feedbacks];
        if (teacherWallFilter && teacherWallFilter.value !== 'all') {
            activeFeedbacks = activeFeedbacks.filter(fb => String(fb.session) === teacherWallFilter.value);
        }
        activeFeedbacks.reverse();

        if (activeFeedbacks.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-muted); padding:2rem 0; grid-column: 1/-1; text-align:center;">該堂次暫無任何同學提交回饋。</p>';
            return;
        }

        activeFeedbacks.forEach(fb => {
            const likedByArray = fb.likedBy || [];
            const likedByStr = likedByArray.length > 0 ? `<div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; text-align: right;">${likedByArray.join(', ')} 覺得讚</div>` : '';
            
            const div = document.createElement('div');
            div.className = 'feedback-item';
            div.innerHTML = `
                <div class="feedback-item-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span class="feedback-student-tag"><i class="fa-solid fa-user"></i> ${fb.studentName}</span>
                        <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 8px;">${fb.timestamp}</span>
                    </div>
                    <button class="delete-fb-btn" data-id="${fb.id}" style="background:none; border:none; color: var(--danger); cursor:pointer; padding: 4px; border-radius: 4px;" title="刪除回饋"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="feedback-item-body">
                    <div class="feedback-item-target">🎯 聆聽 第 ${fb.session} 節：${fb.topic}</div>
                    <div class="feedback-item-text">「${fb.content}」</div>
                    <div style="font-size: 0.85rem; color: var(--primary); margin-top: 8px; text-align: right;"><i class="fa-solid fa-heart" style="color: #EF4444;"></i> ${likedByArray.length} 個讚</div>
                    ${likedByStr}
                </div>
            `;
            
            const delBtn = div.querySelector('.delete-fb-btn');
            if (delBtn) {
                delBtn.addEventListener('click', (e) => {
                    if (confirm('確定要刪除這筆回饋嗎？')) {
                        feedbacks = feedbacks.filter(f => f.id !== fb.id);
                        saveFeedbacks(feedbacks);
                        renderTeacherFeedbacks();
                        updateSubmissionStats();
                    }
                });
            }

            grid.appendChild(div);
        });
    }

    // --- Excel Export Logic ---
    btnExportCsv.addEventListener('click', () => {
        if (typeof XLSX === 'undefined') {
            alert('系統正在載入匯出模組，請稍後再試！');
            return;
        }

        const data = [
            ["組別ID", "報告主題", "發表學生與班級", "安排場次", "報告狀態", "教師評語"]
        ];

        presentations.forEach(p => {
            let statusText = '尚未報告';
            if (p.status === 'completed') statusText = '已完成';
            if (p.status === 'delayed') statusText = '延誤缺席';

            let sessionText = `第 ${p.session} 節`;
            if (p.session === 0) sessionText = '備用/延誤區';

            data.push([
                p.id,
                p.topic,
                p.presenters,
                sessionText,
                statusText,
                p.comment || ''
            ]);
        });

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "發表排程與評語");
        XLSX.writeFile(wb, "自主學習發表排程與評語紀錄.xlsx");
    });

    // --- CSV Import Logic ---
    btnImportCsv.addEventListener('click', () => {
        csvFileInput.click();
    });

    csvFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
            const text = evt.target.result;
            const parsed = parseUploadedCSV(text);
            if (parsed && parsed.length > 0) {
                if (confirm(`成功解析出 ${parsed.length} 組報告！\n按下「確定」：系統會自動更新學生的主題與分類，並保留您已經排好的節次、狀態、評語與推薦紀錄！`)) {
                    pushHistory();
                    
                    const merged = parsed.map(newP => {
                        // 嘗試尋找相同的學生組合
                        const existingP = presentations.find(oldP => oldP.presenters === newP.presenters);
                        if (existingP) {
                            return { 
                                ...newP, 
                                id: existingP.id, // Keep old ID
                                session: existingP.session, 
                                status: existingP.status, 
                                comment: existingP.comment, 
                                isRecommended: existingP.isRecommended, 
                                duration: existingP.duration 
                            };
                        }
                        return newP;
                    });
                    
                    presentations = merged;
                    savePresentations(presentations);
                    renderBoard();
                    alert('資料匯入與更新成功！');
                }
            }
        };
        reader.readAsText(file, 'utf-8');
        csvFileInput.value = ''; // Reset
    });

    function parseUploadedCSV(text) {
        const lines = text.split(/\r?\n/);
        if (lines.length < 2) {
            alert('CSV 檔案行數不足！');
            return [];
        }

        const parseLine = (line) => {
            const result = [];
            let cur = '';
            let inQuotes = false;
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    result.push(cur.trim());
                    cur = '';
                } else {
                    cur += char;
                }
            }
            result.push(cur.trim());
            return result;
        };

        let firstLine = lines[0];
        if (firstLine.charCodeAt(0) === 0xFEFF) {
            firstLine = firstLine.substring(1);
        }

        const header = parseLine(firstLine);
        const classIdx = header.findIndex(h => h.includes('班級'));
        const seatIdx = header.findIndex(h => h.includes('座號'));
        const nameIdx = header.findIndex(h => h.includes('姓名'));
        const topicIdx = header.findIndex(h => h.includes('主題'));
        const categoryIdx = header.findIndex(h => h.includes('學群') || h.includes('分類'));

        if (classIdx === -1 || nameIdx === -1 || topicIdx === -1) {
            alert('CSV 格式不正確！必須包含「班級」、「姓名」、「主題」等欄位。');
            return [];
        }

        const list = [];
        const seen = new Set();

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            if (!line.trim()) continue;
            
            const row = parseLine(line);
            if (row.length <= Math.max(classIdx, nameIdx, topicIdx)) continue;

            const clazz = row[classIdx];
            const seat = seatIdx !== -1 ? row[seatIdx] : '';
            const name = row[nameIdx];
            const topic = row[topicIdx];
            const category = categoryIdx !== -1 && row[categoryIdx] ? row[categoryIdx].trim() : '未分類';

            if (clazz === '班級' || !clazz || !topic || !name) continue;

            const isIndividual = row.some(cell => typeof cell === 'string' && cell.includes('個人'));
            const key = isIndividual ? `${clazz}_${topic}_${name}_${seat}` : `${topic}`;

            if (seen.has(key)) {
                const p = list.find(x => x._key === key);
                if (p) {
                    const presenterStr = `[${clazz}] ${name}${seat ? ` (${seat})` : ''}`;
                    if (!p.presenters.includes(presenterStr)) {
                        p.presenters.push(presenterStr);
                    }
                    if (category !== '未分類' && p.category === '未分類') {
                        p.category = category;
                    }
                }
            } else {
                seen.add(key);
                list.push({
                    _key: key,
                    class: clazz,
                    topic: topic,
                    presenters: [`[${clazz}] ${name}${seat ? ` (${seat})` : ''}`],
                    category: category
                });
            }
        }

        const class1001 = list.filter(item => item.class === '1001');
        const class1002 = list.filter(item => item.class === '1002');
        const others = list.filter(item => item.class !== '1001' && item.class !== '1002');

        const interleavedList = [];
        let i = 0, j = 0;
        while (i < class1001.length || j < class1002.length) {
            if (i < class1001.length) interleavedList.push(class1001[i++]);
            if (j < class1002.length) interleavedList.push(class1002[j++]);
        }
        interleavedList.push(...others);

        return interleavedList.map((item, idx) => {
            const session = (idx % 4) + 1;
            return {
                id: `p_${Date.now()}_${idx + 1}`,
                topic: item.topic,
                presenters: item.presenters.join(', '),
                session: session,
                status: 'pending',
                comment: '',
                category: item.category || '未分類'
            };
        });
    }

    // --- Interleave Logic ---
    const btnInterleave = document.getElementById('btn-interleave');
    let interleave1001First = true;
    if (btnInterleave) {
        btnInterleave.addEventListener('click', () => {
            if (confirm(`確定要自動交錯排列各節次的 1001 與 1002 班級嗎？\n此操作將以「${interleave1001First ? '1001班' : '1002班'}優先」的方式重新排序，但不會改變您各班內部的先後順序。`)) {
                pushHistory();
                
                function getClassStr(p) {
                    if (p.presenters.includes('[1001]')) return '1001';
                    if (p.presenters.includes('[1002]')) return '1002';
                    return 'unknown';
                }

                const newOrder = [];
                // Process each session separately
                [1, 2, 3, 4, 0].forEach(session => {
                    const sessionCards = presentations.filter(p => p.session === session);
                    const class1 = sessionCards.filter(p => getClassStr(p) === '1001');
                    const class2 = sessionCards.filter(p => getClassStr(p) === '1002');
                    const unk = sessionCards.filter(p => getClassStr(p) === 'unknown');
                    
                    const firstClass = interleave1001First ? class1 : class2;
                    const secondClass = interleave1001First ? class2 : class1;
                    
                    const interleaved = [];
                    let i = 0, j = 0;
                    while (i < firstClass.length || j < secondClass.length) {
                        if (i < firstClass.length) interleaved.push(firstClass[i++]);
                        if (j < secondClass.length) interleaved.push(secondClass[j++]);
                    }
                    unk.forEach(p => interleaved.push(p));
                    
                    newOrder.push(...interleaved);
                });
                
                interleave1001First = !interleave1001First; // Toggle for next click
                
                presentations = newOrder;
                savePresentations(presentations);
                renderBoard();
            }
        });
    }

    // --- Publish Logic ---
    const btnPublish = document.getElementById('btn-publish');
    if (btnPublish) {
        btnPublish.addEventListener('click', () => {
            if (confirm('確定要發布目前的排程與狀態給學生端嗎？\n發布後，學生端才會看到您最新排定的名單順序。')) {
                localStorage.setItem('published_presentations', JSON.stringify(presentations));
                alert('已成功發布名單至學生端！');
            }
        });
    }

    // --- Submission Status Logic ---
    const subSessionFilter = document.getElementById('submission-session-filter');
    const subStatTotal = document.getElementById('sub-stat-total');
    const subStatFilled = document.getElementById('sub-stat-filled');
    const subStatUnfilled = document.getElementById('sub-stat-unfilled');
    const subStatRate = document.getElementById('sub-stat-rate');
    const unfilledCount = document.getElementById('unfilled-count');
    const filledCount = document.getElementById('filled-count');
    const unfilledList = document.getElementById('unfilled-students-list');
    const filledList = document.getElementById('filled-students-list');

    if (subSessionFilter) {
        subSessionFilter.addEventListener('change', () => {
            renderSubmissionStatus();
        });
    }

    function extractStudentsFromPresentations(pList) {
        const students = [];
        const seen = new Set();
        pList.forEach(p => {
            const parts = p.presenters.split(',');
            let currentClass = '';
            
            parts.forEach(part => {
                let text = part.trim();
                if (!text) return;
                
                const classMatch = text.match(/^\[([^\]]+)\]\s*(.*)$/);
                if (classMatch) {
                    currentClass = classMatch[1];
                    text = classMatch[2];
                }
                
                if (!currentClass) return;

                const seatMatch = text.match(/^([^\(]+)(?:\((\d+)\))?$/);
                if (seatMatch) {
                    const name = seatMatch[1].trim();
                    const seat = seatMatch[2] ? seatMatch[2].trim() : '';
                    const fullName = `${currentClass}-${seat.padStart(2, '0')} ${name}`;
                    if (!seen.has(fullName)) {
                        seen.add(fullName);
                        students.push({
                            class: currentClass,
                            seat: seat,
                            name: name,
                            fullName: fullName
                        });
                    }
                }
            });
        });
        students.sort((a, b) => a.fullName.localeCompare(b.fullName));
        return students;
    }

    function renderSubmissionStatus() {
        if (!unfilledList) return;

        const roster = extractStudentsFromPresentations(presentations);
        const selectedSession = subSessionFilter ? subSessionFilter.value : '';

        const filled = [];
        const unfilled = [];

        roster.forEach(student => {
            const hasSubmitted = feedbacks.some(fb => {
                if (selectedSession && String(fb.session) !== String(selectedSession)) {
                    return false;
                }
                const fbName = fb.studentName.trim().toLowerCase();
                const rosterName = student.name.trim().toLowerCase();
                const rosterFullName = student.fullName.trim().toLowerCase();

                if (fbName.includes(rosterName)) return true;
                if (rosterFullName.includes(fbName)) return true;

                const cleanFb = fbName.replace(/[^0-9a-z\u4E00-\u9FFF]/g, '');
                const cleanRoster = rosterFullName.replace(/[^0-9a-z\u4E00-\u9FFF]/g, '');
                if (cleanFb.includes(cleanRoster) || cleanRoster.includes(cleanFb)) return true;

                return false;
            });

            if (hasSubmitted) {
                const reviews = feedbacks.filter(fb => {
                    if (selectedSession && String(fb.session) !== String(selectedSession)) {
                        return false;
                    }
                    const fbName = fb.studentName.trim().toLowerCase();
                    const rosterName = student.name.trim().toLowerCase();
                    return fbName.includes(rosterName) || rosterName.includes(fbName);
                }).map(fb => fb.topic).join(', ');

                filled.push({
                    student: student,
                    reviews: reviews || '已填寫'
                });
            } else {
                unfilled.push(student);
            }
        });

        const totalCount = roster.length;
        const filledCountNum = filled.length;
        const unfilledCountNum = unfilled.length;
        const ratePercent = totalCount > 0 ? Math.round((filledCountNum / totalCount) * 100) : 0;

        subStatTotal.textContent = totalCount;
        subStatFilled.textContent = filledCountNum;
        subStatUnfilled.textContent = unfilledCountNum;
        subStatRate.textContent = `${ratePercent}%`;

        unfilledCount.textContent = unfilledCountNum;
        if (filledCount) filledCount.textContent = filledCountNum;

        unfilledList.innerHTML = '';
        if (unfilled.length === 0) {
            unfilledList.innerHTML = '<span style="font-size:0.85rem; color:var(--text-muted); padding: 0.5rem 0;">本場次所有學生皆已完成回饋！</span>';
        } else {
            unfilled.forEach(s => {
                const tag = document.createElement('span');
                tag.style.cssText = 'background-color: #F8ECE9; color: var(--danger); border: 1px solid rgba(201, 111, 92, 0.2); padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.8rem; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;';
                tag.innerHTML = `<i class="fa-solid fa-user-xmark"></i> ${s.fullName}`;
                unfilledList.appendChild(tag);
            });
        }

        if (filledList) {
            filledList.innerHTML = '';
            if (filled.length === 0) {
                filledList.innerHTML = '<span style="font-size:0.85rem; color:var(--text-muted); padding: 0.5rem 0;">目前無已填寫回饋的學生。</span>';
            } else {
                filled.forEach(item => {
                    const tag = document.createElement('span');
                    tag.style.cssText = 'background-color: #EAEFE6; color: var(--secondary); border: 1px solid rgba(168, 184, 160, 0.2); padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.8rem; font-weight: 500; display: inline-flex; align-items: center; gap: 4px; cursor: help;';
                    tag.title = `回饋主題: ${item.reviews}`;
                    tag.innerHTML = `<i class="fa-solid fa-user-check"></i> ${item.student.fullName}`;
                    filledList.appendChild(tag);
                });
            }
        }

        const recommendCountEl = document.getElementById('recommend-count');
        const recommendListEl = document.getElementById('recommend-students-list');

        if (recommendCountEl && recommendListEl) {
            const recommendedPresentations = presentations.filter(p => {
                if (!p.isRecommended) return false;
                if (selectedSession && String(p.session) !== String(selectedSession)) return false;
                return true;
            });

            recommendCountEl.textContent = recommendedPresentations.length;
            recommendListEl.innerHTML = '';
            
            if (recommendedPresentations.length === 0) {
                recommendListEl.innerHTML = '<span style="font-size:0.85rem; color:var(--text-muted); padding: 0.5rem 0;">本場次尚無推薦組別。</span>';
            } else {
                recommendedPresentations.forEach(p => {
                    const tag = document.createElement('span');
                    tag.style.cssText = 'background-color: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.8rem; font-weight: bold; display: inline-flex; align-items: center; gap: 4px; cursor: pointer; transition: all 0.2s;';
                    tag.innerHTML = `<i class="fa-solid fa-star" style="color: #F59E0B;"></i> ${p.topic}`;
                    tag.title = "點擊查看組別詳情";
                    
                    tag.addEventListener('mouseenter', () => { tag.style.backgroundColor = '#FEF3C7'; tag.style.borderColor = '#FCD34D'; });
                    tag.addEventListener('mouseleave', () => { tag.style.backgroundColor = '#FFFBEB'; tag.style.borderColor = '#FDE68A'; });
                    
                    tag.addEventListener('click', () => {
                        openEditModal(p.id);
                    });
                    recommendListEl.appendChild(tag);
                });
            }
        }

        // Calculate MVP Leaderboard
        const mvpBoard = document.getElementById('mvp-leaderboard');
        if (mvpBoard) {
            const topicCounts = {};
            feedbacks.forEach(fb => {
                if (selectedSession && String(fb.session) !== String(selectedSession)) {
                    return;
                }
                const topic = fb.topic;
                topicCounts[topic] = (topicCounts[topic] || 0) + 1;
            });

            const sortedTopics = Object.entries(topicCounts)
                .map(([topic, count]) => ({ topic, count }))
                .sort((a, b) => b.count - a.count);

            mvpBoard.innerHTML = '';
            if (sortedTopics.length === 0) {
                mvpBoard.innerHTML = '<span style="font-size:0.85rem; color:var(--text-muted); padding: 1rem 0;">目前無回饋資料可供排名。</span>';
            } else {
                const top3 = sortedTopics.slice(0, 3);
                const podiumOrder = [];
                // Arrange in podium order: 2, 1, 3
                if (top3[1]) podiumOrder.push({ ...top3[1], rank: 2, height: '110px', color: '#B3B3B3', bg: '#F5F5F5' });
                if (top3[0]) podiumOrder.push({ ...top3[0], rank: 1, height: '140px', color: '#D4AF37', bg: '#FFFDF5' });
                if (top3[2]) podiumOrder.push({ ...top3[2], rank: 3, height: '90px', color: '#CD7F32', bg: '#FAF5E8' });

                podiumOrder.forEach(item => {
                    const card = document.createElement('div');
                    card.style.cssText = `
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-end;
                        width: 30%;
                        max-width: 200px;
                        height: ${item.height};
                        background: ${item.bg};
                        border: 1px solid ${item.color};
                        border-bottom: 4px solid ${item.color};
                        border-radius: 8px 8px 0 0;
                        padding: 1rem 0.75rem;
                        text-align: center;
                        position: relative;
                        box-shadow: 0 -2px 10px rgba(0,0,0,0.03);
                    `;
                    
                    const rankIcon = item.rank === 1 ? '🥇' : item.rank === 2 ? '🥈' : '🥉';
                    
                    card.innerHTML = `
                        <div style="position: absolute; top: -20px; font-size: 2rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">${rankIcon}</div>
                        <div style="font-size: 0.8rem; font-weight: bold; color: var(--primary); margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;" title="${item.topic}">${item.topic}</div>
                        <div style="font-size: 0.95rem; font-weight: bold; color: ${item.color}; background: white; padding: 2px 10px; border-radius: 12px; border: 1px solid ${item.color}; margin-top: auto;">${item.count} 票</div>
                    `;
                    mvpBoard.appendChild(card);
                });
            }
        }
    }

    // Auto reload state every 5 seconds to sync with student submissions
    setInterval(() => {
        const currentLength = feedbacks.length;
        feedbacks = getFeedbacks();
        if (feedbacks.length !== currentLength) {
            renderTeacherFeedbacks();
            renderSubmissionStatus();
        }
    }, 5000);

    // --- Startup Execution ---
    renderBoard();
    renderTeacherFeedbacks();
    renderSubmissionStatus();
});
