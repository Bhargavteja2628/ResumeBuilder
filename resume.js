function addEducation() {
    const educationType = document.getElementById('education-type').value;
    const educationDetails = document.getElementById('education-details').value;
    const gpa = document.getElementById('gpa').value;
    const educationStart = document.getElementById('education-start').value;
    const educationEnd = document.getElementById('education-end').value;

    const educationList = document.getElementById('education-list');

    // Check if the table already exists
    let table = document.getElementById('education-table');
    if (!table) {
        // Create the table if it does not exist
        table = document.createElement('table');
        table.id = 'education-table';
        table.innerHTML = `
            <tr>
                <th>Type</th>
                <th>Education</th>
                <th>GPA</th>
                <th>Duration</th>
            </tr>
        `;
        educationList.appendChild(table);
    }

    // Add a new row to the existing table
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${educationType}</td>
        <td>${educationDetails}</td>
        <td>${gpa}</td>
        <td>${educationStart} To ${educationEnd}</td>
    `;
}

function addProject() {
    const projectTitle = document.getElementById('project-title').value;
    const projectDescription = document.getElementById('project-description').value;
    const projectDuration = document.getElementById('project-duration').value;

    const projectList = document.getElementById('project-list');

    if (projectTitle && projectDescription && projectDuration) {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h4>${projectTitle}</h4>
            <p>${projectDescription}</p>
            <p><strong>Duration:</strong> ${projectDuration}</p>
        `;
        projectList.appendChild(projectItem);

        // Clear the input fields
        document.getElementById('project-title').value = '';
        document.getElementById('project-description').value = '';
        document.getElementById('project-duration').value = '';
    } else {
        alert('Please fill in all project details.');
    }
}

function generateResume() {
    const templateSelect = document.getElementById('template-type').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;

    const employment = document.getElementById('employment').value;
    const employmentStart = document.getElementById('employment-start').value;
    const employmentEnd = document.getElementById('employment-end').value;

    const employmentDetails = employment ? `<p>${employment} (${employmentStart} - ${employmentEnd || 'Present'})</p>` : '';

    const educationList = document.getElementById('education-list').innerHTML;
    const projectList = document.getElementById('project-list').innerHTML;

    const programmingSkills = [...document.querySelectorAll('#programming-skills input:checked')].map(input => input.value);
    const hardwareSkills = [...document.querySelectorAll('#hardware-skills input:checked')].map(input => input.value);

    displayResume(templateSelect, name, phone, email, address, github, linkedin, summary, employmentDetails, educationList, projectList, programmingSkills, hardwareSkills);

    // Show the download button after resume generation
    document.getElementById('download-btn').style.display = 'block';
}

function displayResume(templateSelect, name, phone, email, address, github, linkedin, summary, employmentDetails, educationList, projectList, programmingSkills, hardwareSkills) {
    let resumeOutput = '';

    if (templateSelect === 'Template2') {
        resumeOutput = `
            <div class="header2">
                <img src="${document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : ''}" alt="Photo">
                <div class="contact-info">
                    ${name ? `<h2>${name}</h2>` : ''}
                    ${phone ? `<p><i class="fas fa-phone"></i><strong> Phone :</strong> ${phone}</p>` : ''}
                    ${email ? `<p><i class="fas fa-envelope"></i><strong> Email :</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
                    ${address ? `<p><i class="fas fa-map-marker-alt"></i><strong> Location :</strong> ${address}</p>` : ''}
                    ${linkedin ? `<p><i class="fab fa-linkedin"></i><strong> LinkedIn :</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ''}
                    ${github ? `<p><i class="fab fa-github"></i><strong> GitHub :</strong> <a href="${github}" target="_blank">${github}</a></p>` : ''}
                </div>
            </div>

            ${summary ? `<div class="section-title2"><u>Summary :</u></div><p>${summary}</p>` : ''}
            ${educationList ? `<div class="section-title2"><u>Education :</u></div>${educationList}` : ''}
            ${employmentDetails ? `<div class="section-title2"><u>Employment :</u></div>${employmentDetails}` : ''}
            ${projectList ? `<div class="section-title2"><u>Projects :</u></div>${projectList}` : ''}

            ${(programmingSkills.length || hardwareSkills.length) ? `
                <div class="section-title2"><u>Skills :</u></div>
                ${programmingSkills.length ? `
                    <h4>Programming Skills :</h4>
                    <ul class="skills-list">
                        ${programmingSkills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                ` : ''}
                ${hardwareSkills.length ? `
                    <h4>Hardware Skills :</h4>
                    <ul class="skills-list">
                        ${hardwareSkills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                ` : ''}
            ` : ''}
        `;
    } else if (templateSelect === 'Template1') {
        resumeOutput = `
            <div class="header1">
                <div class="name">
                    ${name ? `<h2>${name}</h2>` : ''}
                    ${phone ? `<p><i class="fas fa-phone"></i><strong>Phone :</strong> ${phone}</p>` : ''}
                    ${email ? `<p><i class="fas fa-envelope"></i><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
                    ${address ? `<p><i class="fas fa-map-marker-alt"></i><strong>Location :</strong> ${address}</p>` : ''}
                    ${linkedin ? `<p><i class="fab fa-linkedin"></i><strong>LinkedIn :</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ''}
                    ${github ? `<p><i class="fab fa-github"></i><strong>GitHub :</strong> <a href="${github}" target="_blank">${github}</a></p>` : ''}
                </div>
                <div class="profile-photo">
                    <img src="${document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : ''}" alt="Photo" />
                </div>
            </div>

            ${summary ? `
                <div class="section">
                    <h3 class="section-title1">Summary</h3>
                    <p>${summary}</p>
                </div>
            ` : ''}
            ${educationList ? `
                <div class="section">
                    <h3 class="section-title1">Education</h3>
                    ${educationList}
                </div>
            ` : ''}
            ${employmentDetails ? `
                <div class="section">
                    <h3 class="section-title1">Employment</h3>
                    ${employmentDetails}
                </div>
            ` : ''}

            ${projectList ? `
                <div class="section">
                    <h3 class="section-title1">Projects</h3>
                    ${projectList}
                </div>
            ` : ''}

            ${(programmingSkills.length || hardwareSkills.length) ? `
                <div class="section">
                    <h3 class="section-title1">Skills</h3>
                    ${programmingSkills.length ? `
                        <div class="skill-subsection">
                            <h4>Programming Skills :</h4>
                            <ul class="skills-list">
                                ${programmingSkills.map(skill => `<li>${skill}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${hardwareSkills.length ? `
                        <div class="skill-subsection">
                            <h4>Hardware Skills :</h4>
                            <ul class="skills-list">
                                ${hardwareSkills.map(skill => `<li>${skill}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
        `;
    }

    // Set the resume output
    document.getElementById('resume-output').innerHTML = resumeOutput;
}

function downloadResume() {
    const element = document.getElementById('resume-output');
    html2pdf().from(element).save();
}

function addProgrammingSkill() {
    const skill = document.getElementById('custom-programming-skill').value;
    if (skill) {
        const list = document.getElementById('programming-skills');
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" value="${skill}"> ${skill}`;
        list.appendChild(label);
        document.getElementById('custom-programming-skill').value = '';
    } else {
        alert('Please enter a programming skill.');
    }
}

function addHardwareSkill() {
    const skill = document.getElementById('custom-hardware-skill').value;
    if (skill) {
        const list = document.getElementById('hardware-skills');
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" value="${skill}"> ${skill}`;
        list.appendChild(label);
        document.getElementById('custom-hardware-skill').value = '';
    } else {
        alert('Please enter a hardware skill.');
    }
}
