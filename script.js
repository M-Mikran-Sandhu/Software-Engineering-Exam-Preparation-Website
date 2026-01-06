// ============================================
// Software Engineering Exam Prep - JavaScript
// ============================================

// Quiz data - imported from quizzes.json structure
const quizData = {
    1: [
        {
            id: 1,
            question: "Which of the following best defines Software Engineering?",
            options: [
                "Writing code in a programming language",
                "The disciplined application of engineering principles to software development",
                "The study of computer algorithms",
                "The process of debugging software"
            ],
            correctAnswer: 1,
            explanation: "Software Engineering is the systematic application of engineering principles to software development, encompassing the entire lifecycle from requirements to maintenance."
        },
        {
            id: 2,
            question: "What is the relationship between Error, Fault, and Failure?",
            options: [
                "Error causes Failure which causes Fault",
                "Fault causes Error which causes Failure",
                "Error causes Fault which causes Failure",
                "They are independent concepts with no relationship"
            ],
            correctAnswer: 2,
            explanation: "An error is a human action that creates a fault (defect in code). When that fault is executed, it results in a failure (incorrect behavior)."
        },
        {
            id: 3,
            question: "Which of the following is NOT a core component of a System?",
            options: [
                "Objects",
                "Activities",
                "Relationships",
                "Errors"
            ],
            correctAnswer: 3,
            explanation: "A system consists of objects and activities with relationships between them. Errors are problems, not components of a system."
        },
        {
            id: 4,
            question: "What is the primary difference between Computer Science and Software Engineering?",
            options: [
                "Computer Science deals with hardware, Software Engineering with software",
                "Computer Science focuses on theory, Software Engineering applies theory to practice",
                "They are the same field with different names",
                "Computer Science is more advanced than Software Engineering"
            ],
            correctAnswer: 1,
            explanation: "Computer Science provides theoretical foundations, while Software Engineering applies these principles to practical software development."
        },
        {
            id: 5,
            question: "Which term refers to a step-by-step description of how to perform a task?",
            options: [
                "Method",
                "Tool",
                "Procedure",
                "Paradigm"
            ],
            correctAnswer: 2,
            explanation: "A procedure is a detailed, step-by-step description of how to perform a task or apply a method consistently."
        }
    ],
    2: [
        {
            id: 1,
            question: "Which phase of software engineering comes immediately after Design?",
            options: [
                "Requirements Analysis",
                "Testing",
                "Implementation",
                "Deployment"
            ],
            correctAnswer: 2,
            explanation: "The typical sequence is Requirements Analysis → Design → Implementation → Testing → Deployment → Maintenance."
        },
        {
            id: 2,
            question: "What is the main disadvantage of the Waterfall Model?",
            options: [
                "It is too flexible",
                "It lacks clear structure",
                "It is inflexible and detects defects late",
                "It requires too many team members"
            ],
            correctAnswer: 2,
            explanation: "The Waterfall Model's main disadvantage is its inflexibility—each phase must be completed before the next, and defects discovered late are expensive to fix."
        },
        {
            id: 3,
            question: "Which process model emphasizes testing at each development phase?",
            options: [
                "Waterfall Model",
                "V Model",
                "Prototyping Model",
                "Spiral Model"
            ],
            correctAnswer: 1,
            explanation: "The V Model creates a V-shaped diagram with each development stage having a corresponding testing stage, emphasizing verification and validation."
        },
        {
            id: 4,
            question: "What is the primary role of a Business Analyst?",
            options: [
                "Writing code for the application",
                "Gathering requirements from stakeholders",
                "Managing the project schedule",
                "Testing the software"
            ],
            correctAnswer: 1,
            explanation: "Business Analysts gather requirements from stakeholders, document specifications, and ensure alignment with business objectives."
        },
        {
            id: 5,
            question: "Which model is best suited for large, complex projects with significant risks?",
            options: [
                "Waterfall Model",
                "Prototyping Model",
                "Spiral Model",
                "V Model"
            ],
            correctAnswer: 2,
            explanation: "The Spiral Model combines iterative development with risk management, making it particularly suited for large, complex projects."
        }
    ],
    3: [
        {
            id: 1,
            question: "What is the primary purpose of a Work Breakdown Structure (WBS)?",
            options: [
                "To identify all project risks",
                "To decompose the project into manageable phases and activities",
                "To define the project budget",
                "To assign team members to tasks"
            ],
            correctAnswer: 1,
            explanation: "The WBS is a hierarchical decomposition of the project into manageable phases, steps, and activities for planning and scheduling."
        },
        {
            id: 2,
            question: "Which Agile methodology emphasizes pair programming and test-driven development?",
            options: [
                "Scrum",
                "Kanban",
                "Extreme Programming (XP)",
                "Lean"
            ],
            correctAnswer: 2,
            explanation: "Extreme Programming (XP) emphasizes technical excellence through practices like pair programming, test-driven development, and continuous integration."
        },
        {
            id: 3,
            question: "What does the Critical Path Method (CPM) identify?",
            options: [
                "The shortest sequence of activities",
                "The most expensive activities",
                "The longest sequence of dependent activities",
                "The activities with the most team members"
            ],
            correctAnswer: 2,
            explanation: "CPM identifies the longest sequence of dependent activities—activities on this path cannot be delayed without delaying the entire project."
        },
        {
            id: 4,
            question: "Which process model uses sprints of typically 2-4 weeks?",
            options: [
                "Waterfall",
                "Spiral",
                "Scrum",
                "V Model"
            ],
            correctAnswer: 2,
            explanation: "Scrum is an Agile methodology that organizes work into sprints (typically 2-4 weeks) with daily standups and iterative delivery."
        },
        {
            id: 5,
            question: "What is a Gantt Chart used for?",
            options: [
                "Identifying system defects",
                "Visualizing project schedule, dependencies, and progress",
                "Calculating project budget",
                "Defining system requirements"
            ],
            correctAnswer: 1,
            explanation: "Gantt Charts are bar charts that visualize project activities on a timeline, showing dependencies and progress."
        }
    ],
    4: [
        {
            id: 1,
            question: "Which of the following is a Functional Requirement?",
            options: [
                "The system shall respond within 2 seconds",
                "The system shall calculate payroll",
                "The system shall be available 99.9% of the time",
                "The system shall be user-friendly"
            ],
            correctAnswer: 1,
            explanation: "Functional requirements describe specific behaviors and functions the software must perform, like calculating payroll."
        },
        {
            id: 2,
            question: "What is the primary purpose of making requirements testable?",
            options: [
                "To reduce development costs",
                "To allow testers to verify whether requirements have been met",
                "To simplify the design process",
                "To reduce team communication"
            ],
            correctAnswer: 1,
            explanation: "Testable requirements are specific and measurable, allowing testers to verify whether they have been met during testing."
        },
        {
            id: 3,
            question: "Which tool is used to document complex business logic with different input combinations?",
            options: [
                "State Machine",
                "Decision Table",
                "Use Case Diagram",
                "Entity-Relationship Diagram"
            ],
            correctAnswer: 1,
            explanation: "Decision Tables show how different combinations of input conditions lead to specific outputs or actions."
        },
        {
            id: 4,
            question: "What does a State Machine diagram represent?",
            options: [
                "Data relationships in the system",
                "System states and transitions between them",
                "User interactions with the system",
                "Project schedule and dependencies"
            ],
            correctAnswer: 1,
            explanation: "State Machines show system states and transitions between states based on events or conditions."
        },
        {
            id: 5,
            question: "Which of the following is a Non-Functional Requirement?",
            options: [
                "The system shall generate reports",
                "The system shall encrypt user passwords",
                "The system shall process transactions",
                "The system shall display user profiles"
            ],
            correctAnswer: 1,
            explanation: "Non-functional requirements describe quality attributes like security, performance, and reliability, not specific behaviors."
        }
    ],
    5: [
        {
            id: 1,
            question: "What does a Message Sequence Diagram show?",
            options: [
                "System data structure",
                "The sequence of interactions between components over time",
                "User interface layout",
                "Project schedule"
            ],
            correctAnswer: 1,
            explanation: "Message Sequence Diagrams show the sequence of interactions between system components, useful for understanding collaboration."
        },
        {
            id: 2,
            question: "Which diagram type is best for showing object-oriented system structure?",
            options: [
                "Entity-Relationship Diagram",
                "Dataflow Diagram",
                "Class Diagram",
                "Use Case Diagram"
            ],
            correctAnswer: 2,
            explanation: "Class Diagrams show classes, attributes, methods, and relationships, providing a static view of object-oriented system structure."
        },
        {
            id: 3,
            question: "What does an Entity-Relationship Diagram (ERD) model?",
            options: [
                "System processes and data flow",
                "User interactions with the system",
                "Data structure and entity relationships",
                "System states and transitions"
            ],
            correctAnswer: 2,
            explanation: "ERDs model the data structure of the system, showing entities, attributes, and relationships."
        },
        {
            id: 4,
            question: "Which modeling technique uses places, transitions, and tokens?",
            options: [
                "State Machine",
                "Petrinets",
                "Use Case Diagram",
                "Dataflow Diagram"
            ],
            correctAnswer: 1,
            explanation: "Petrinets use places (states), transitions (events), and tokens (resources) to model concurrent systems."
        },
        {
            id: 5,
            question: "What is the primary purpose of a Use Case Diagram?",
            options: [
                "To show system data structure",
                "To show system functionality from the user's perspective",
                "To show system performance metrics",
                "To show project schedule"
            ],
            correctAnswer: 1,
            explanation: "Use Case Diagrams show system functionality from the user's perspective, including actors and use cases."
        }
    ],
    6: [
        {
            id: 1,
            question: "What is the primary purpose of Unit Testing?",
            options: [
                "Testing the complete system",
                "Testing individual components in isolation",
                "Testing user requirements",
                "Testing system performance"
            ],
            correctAnswer: 1,
            explanation: "Unit Testing involves testing individual components or modules in isolation to verify their correct behavior."
        },
        {
            id: 2,
            question: "Which type of testing verifies that components work correctly together?",
            options: [
                "Unit Testing",
                "Integration Testing",
                "System Testing",
                "Acceptance Testing"
            ],
            correctAnswer: 1,
            explanation: "Integration Testing verifies that different components work correctly together and that their interactions are correct."
        },
        {
            id: 3,
            question: "What does Code Coverage measure?",
            options: [
                "The number of defects found",
                "The percentage of code executed by tests",
                "The time taken to run tests",
                "The cost of testing"
            ],
            correctAnswer: 1,
            explanation: "Code Coverage measures the percentage of code that is executed by tests, indicating how thoroughly the code is tested."
        },
        {
            id: 4,
            question: "Which testing phase verifies that user requirements are met?",
            options: [
                "Unit Testing",
                "Integration Testing",
                "System Testing",
                "Acceptance Testing"
            ],
            correctAnswer: 3,
            explanation: "Acceptance Testing verifies that the software meets user requirements and is ready for deployment."
        },
        {
            id: 5,
            question: "What is Defect Density?",
            options: [
                "The number of defects in the system",
                "Defects per thousand lines of code",
                "The cost of fixing defects",
                "The time to fix defects"
            ],
            correctAnswer: 1,
            explanation: "Defect Density is a quality metric that measures the number of defects per thousand lines of code."
        }
    ],
    7: [
        {
            id: 1,
            question: "Which type of maintenance involves fixing bugs in the software?",
            options: [
                "Adaptive Maintenance",
                "Corrective Maintenance",
                "Perfective Maintenance",
                "Preventive Maintenance"
            ],
            correctAnswer: 1,
            explanation: "Corrective Maintenance involves fixing bugs and defects discovered during operation."
        },
        {
            id: 2,
            question: "What is Adaptive Maintenance?",
            options: [
                "Improving software performance",
                "Fixing bugs in the software",
                "Adapting software to new environments or requirements",
                "Preventing future problems"
            ],
            correctAnswer: 2,
            explanation: "Adaptive Maintenance involves adapting software to new environments, platforms, or regulatory requirements."
        },
        {
            id: 3,
            question: "Which maintenance type focuses on preventing future problems?",
            options: [
                "Corrective Maintenance",
                "Adaptive Maintenance",
                "Perfective Maintenance",
                "Preventive Maintenance"
            ],
            correctAnswer: 3,
            explanation: "Preventive Maintenance involves making changes to prevent future problems, such as refactoring code or updating documentation."
        },
        {
            id: 4,
            question: "What is a Legacy System?",
            options: [
                "A system that is no longer used",
                "An older system that continues to provide value but may be difficult to maintain",
                "A system that has never been tested",
                "A system that is always up-to-date"
            ],
            correctAnswer: 1,
            explanation: "Legacy systems are older software systems that continue to provide value but may be difficult to maintain or modify."
        },
        {
            id: 5,
            question: "What is Perfective Maintenance?",
            options: [
                "Fixing bugs",
                "Adapting to new environments",
                "Improving performance or adding new features",
                "Preventing future problems"
            ],
            correctAnswer: 2,
            explanation: "Perfective Maintenance involves improving software performance, adding new features, or enhancing existing functionality."
        }
    ]
};

// State management
const state = {
    completedSections: new Set(),
    quizAnswers: {},
    quizScores: {}
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadState();
    renderAllQuizzes();
    setupNavigation();
    setupButtons();
    setupMobileNav();
    updateProgress();
});

// ============================================
// STATE MANAGEMENT
// ============================================

function saveState() {
    localStorage.setItem('seExamPrepState', JSON.stringify({
        completedSections: Array.from(state.completedSections),
        quizAnswers: state.quizAnswers,
        quizScores: state.quizScores
    }));
}

function loadState() {
    const saved = localStorage.getItem('seExamPrepState');
    if (saved) {
        const data = JSON.parse(saved);
        state.completedSections = new Set(data.completedSections);
        state.quizAnswers = data.quizAnswers;
        state.quizScores = data.quizScores;
    }
}

function resetState() {
    if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
        state.completedSections.clear();
        state.quizAnswers = {};
        state.quizScores = {};
        saveState();
        location.reload();
    }
}

// ============================================
// QUIZ RENDERING
// ============================================

function renderAllQuizzes() {
    for (let sectionId = 1; sectionId <= 7; sectionId++) {
        renderQuiz(sectionId);
    }
}

function renderQuiz(sectionId) {
    const quizContainer = document.getElementById(`quiz-content-${sectionId}`);
    if (!quizContainer) return;

    const questions = quizData[sectionId];
    let html = '';

    questions.forEach((question, index) => {
        const questionId = `q${sectionId}-${index}`;
        const savedAnswer = state.quizAnswers[questionId];

        html += `
            <div class="quiz-question">
                <div class="question-text">
                    <span class="question-number">Question ${index + 1}:</span> ${question.question}
                </div>
                <div class="quiz-options">
                    ${question.options.map((option, optionIndex) => `
                        <label class="quiz-option">
                            <input 
                                type="radio" 
                                name="${questionId}" 
                                value="${optionIndex}"
                                ${savedAnswer === optionIndex ? 'checked' : ''}
                                onchange="saveAnswer('${questionId}', ${optionIndex})">
                            <span>${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    quizContainer.innerHTML = html;
}

function saveAnswer(questionId, answerIndex) {
    state.quizAnswers[questionId] = answerIndex;
    saveState();
}

// ============================================
// QUIZ SUBMISSION
// ============================================

function submitQuiz(sectionId) {
    const questions = quizData[sectionId];
    let correctCount = 0;
    const results = [];

    questions.forEach((question, index) => {
        const questionId = `q${sectionId}-${index}`;
        const userAnswer = state.quizAnswers[questionId];

        if (userAnswer === undefined) {
            alert('Please answer all questions before submitting.');
            return;
        }

        const isCorrect = userAnswer === question.correctAnswer;
        if (isCorrect) correctCount++;

        results.push({
            question: question.question,
            userAnswer: question.options[userAnswer],
            correctAnswer: question.options[question.correctAnswer],
            isCorrect: isCorrect,
            explanation: question.explanation
        });
    });

    if (results.length !== questions.length) return;

    const score = Math.round((correctCount / questions.length) * 100);
    state.quizScores[sectionId] = score;
    
    if (score >= 80) {
        state.completedSections.add(sectionId);
    }
    
    saveState();
    displayResults(sectionId, score, results, correctCount, questions.length);
    updateProgress();
}

// ============================================
// RESULTS DISPLAY
// ============================================

function displayResults(sectionId, score, results, correctCount, totalCount) {
    const resultsContainer = document.getElementById(`quiz-results-${sectionId}`);
    const feedbackClass = score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low';
    const feedbackText = score >= 80 
        ? '✓ Excellent! You have a strong understanding of this section.'
        : score >= 60
        ? '◐ Good effort! Review the areas where you struggled.'
        : '✗ Keep studying! Focus on the concepts you found challenging.';

    let resultsHtml = `
        <div class="results-header">Quiz Results</div>
        <div class="results-score ${feedbackClass}">
            ${correctCount}/${totalCount} Correct (${score}%)
        </div>
        <div class="results-feedback">${feedbackText}</div>
        <div class="results-details">
    `;

    results.forEach((result, index) => {
        const resultClass = result.isCorrect ? 'correct' : 'incorrect';
        resultsHtml += `
            <div class="result-item">
                <div class="result-question">Q${index + 1}: ${result.question}</div>
                <div class="result-answer ${resultClass}">
                    Your answer: ${result.userAnswer}
                </div>
                ${!result.isCorrect ? `
                    <div class="result-answer correct">
                        Correct answer: ${result.correctAnswer}
                    </div>
                ` : ''}
                <div class="result-answer" style="margin-top: 8px; font-style: italic; color: #6b7280;">
                    ${result.explanation}
                </div>
            </div>
        `;
    });

    resultsHtml += `</div>`;
    resultsContainer.innerHTML = resultsHtml;
    resultsContainer.style.display = 'block';

    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// PROGRESS TRACKING
// ============================================

function updateProgress() {
    const completedCount = state.completedSections.size;
    const totalSections = 7;
    const percentage = (completedCount / totalSections) * 100;

    document.getElementById('progressText').textContent = 
        `Progress: ${completedCount}/${totalSections} Sections`;
    document.getElementById('progressFill').style.width = `${percentage}%`;

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        const sectionId = parseInt(link.dataset.section);
        if (state.completedSections.has(sectionId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    const body = document.body;
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.dataset.section;
            const section = document.getElementById(`section-${sectionId}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }

            // Close mobile nav if open
            if (body.classList.contains('nav-open')) {
                body.classList.remove('nav-open');
                const overlay = document.getElementById('navOverlay');
                const navToggle = document.getElementById('navToggle');
                if (overlay) { overlay.classList.remove('active'); overlay.setAttribute('hidden', ''); }
                if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// ============================================
// BUTTON HANDLERS
// ============================================

function setupButtons() {
    // Quiz submit buttons
    document.querySelectorAll('.quiz-submit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionId = parseInt(this.dataset.quiz);
            submitQuiz(sectionId);
        });
    });

    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetState);
    }

    // Print button
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
}

// MOBILE NAV
function setupMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navOverlay = document.getElementById('navOverlay');
    const body = document.body;

    if (!navToggle) return;

    navToggle.addEventListener('click', () => {
        const isOpen = body.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', isOpen);
        if (navOverlay) {
            navOverlay.classList.toggle('active', isOpen);
            if (isOpen) navOverlay.removeAttribute('hidden'); else navOverlay.setAttribute('hidden', '');
        }
    });

    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            body.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navOverlay.classList.remove('active');
            navOverlay.setAttribute('hidden','');
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && body.classList.contains('nav-open')) {
            body.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
            if (navOverlay) { navOverlay.classList.remove('active'); navOverlay.setAttribute('hidden',''); }
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});

console.log('Software Engineering Exam Prep - Script loaded successfully');
