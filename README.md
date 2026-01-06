# Software Engineering Exam Preparation Website

A comprehensive, interactive web-based resource for Software Engineering exam preparation covering 7 major topics with self-assessment quizzes.

## Features

- **7 Comprehensive Sections**: Complete coverage of Software Engineering fundamentals, process models, requirements engineering, system modeling, quality assurance, and maintenance
- **Self-Assessment Quizzes**: 5 multiple-choice questions per section with immediate feedback and explanations
- **Progress Tracking**: Visual progress indicator showing completion status across all sections
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Local Storage**: Automatically saves quiz answers and progress in browser
- **Print-Friendly**: Full content can be printed for offline study
- **Academic Design**: Clean, professional interface optimized for learning

## Contents

### Section 1: Course Introduction and Fundamentals
- Software Engineering introduction and terminology
- Error, Fault, and Failure relationships
- Systems approach and components

### Section 2: Engineering Approach and Process Models
- Phases of software engineering
- Development team roles and responsibilities
- Process models: Waterfall, V Model, Prototyping

### Section 3: Advanced Process Models and Project Management
- Phased Development, Spiral, UP, Agile (Scrum, XP)
- Work Breakdown Structure (WBS)
- Critical Path Method and Gantt Charts

### Section 4: Requirements Engineering
- Requirements gathering and analysis
- Functional vs. Non-Functional requirements
- Requirements tools: Decision Tables, State Machines, UML diagrams

### Section 5: System Modeling and Design
- Dynamic system descriptions (Message Sequence Diagrams, Petrinets)
- Static system descriptions (ERD, Class Diagrams, DFD, Use Case Diagrams)

### Section 6: Quality Assurance and Testing
- Testing fundamentals and types
- Quality metrics and defect density
- Code coverage and acceptance testing

### Section 7: Software Maintenance and Evolution
- Maintenance activities (Corrective, Adaptive, Perfective, Preventive)
- Software evolution and legacy systems

## Files Included

- `index.html` - Main HTML structure with all 7 sections and quizzes
- `styles.css` - Complete styling with responsive design
- `script.js` - Interactive functionality for quizzes and navigation
- `README.md` - This file with deployment instructions

## How to Deploy

### Option 1: Local Deployment (Easiest)
1. Extract all files to a folder
2. Open `index.html` in any modern web browser
3. Start studying!

### Option 2: Web Server Deployment
1. Extract all files to your web server's public directory
2. Ensure all three files (index.html, styles.css, script.js) are in the same directory
3. Access via your web server URL

### Option 3: GitHub Pages
1. Create a new GitHub repository
2. Upload all three files to the repository
3. Enable GitHub Pages in repository settings
4. Access via `https://yourusername.github.io/repository-name`

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Guide

### Navigation
- Use the sidebar to jump to any section
- Click navigation links to scroll smoothly to content
- Mobile users can collapse/expand the sidebar

### Quizzes
- Each section has a self-assessment quiz with 5 questions
- Select your answer and click "Submit Quiz"
- Immediate feedback shows your score and explanations
- Progress is automatically saved to browser storage

### Progress Tracking
- Header displays overall completion percentage
- Completed sections are marked in the sidebar
- Aim for 80% or higher on each quiz to mark section as complete

### Study Tools
- **Print Content**: Click "Print Content" button to print all materials
- **Reset Progress**: Click "Reset Progress" to start over (confirmation required)
- **Keyboard Shortcuts**: Ctrl+P (Cmd+P on Mac) to print

## Keyboard Navigation

- Tab: Navigate between interactive elements
- Enter/Space: Select quiz options and submit
- Ctrl/Cmd+P: Print content

## Data Storage

- All quiz answers and progress are stored locally in your browser
- Data persists across browser sessions
- Clearing browser cache will reset all progress
- No data is sent to any server

## Tips for Success

1. **Read Carefully**: Take time to understand each concept before taking the quiz
2. **Review Explanations**: Read the explanations for both correct and incorrect answers
3. **Retake Quizzes**: You can retake quizzes multiple times to improve your score
4. **Aim for 80%**: Target 80% or higher on each section quiz
5. **Use Print Feature**: Print content for offline study and review

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **Styling**: CSS3 with responsive design
- **Storage**: Browser LocalStorage API
- **Compatibility**: Works offline after initial load

## Customization

To customize the website:

1. **Change Colors**: Edit CSS variables in `styles.css` (lines 10-30)
2. **Add More Quizzes**: Add new questions to the `quizData` object in `script.js`
3. **Modify Content**: Edit section content directly in `index.html`
4. **Change Fonts**: Update font imports in `index.html` and CSS variables

## Support

For issues or questions:
1. Check browser console for error messages (F12)
2. Ensure all three files are in the same directory
3. Try clearing browser cache and reloading
4. Test in a different browser

## License

This educational resource is provided as-is for exam preparation purposes.

## Version

Version 1.0 - January 2026

---

**Happy Studying!** Good luck with your Software Engineering exam preparation.
