// 1. Initialiser les textes depuis data.js
document.getElementById('site-title').innerText = portfolioData.siteName;
document.getElementById('home-intro-text').innerHTML = portfolioData.homeIntro;
document.getElementById('about-text').innerText = portfolioData.aboutMe;

// 2. Générer les icônes de Contact
const socialContainer = document.getElementById('social-container');
if (portfolioData.socials.instagram) {
    socialContainer.innerHTML += `<a href="${portfolioData.socials.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>`;
}
if (portfolioData.socials.youtube) {
    socialContainer.innerHTML += `<a href="${portfolioData.socials.youtube}" target="_blank"><i class="fa-brands fa-youtube"></i></a>`;
}
if (portfolioData.socials.email) {
    socialContainer.innerHTML += `<a href="${portfolioData.socials.email}"><i class="fa-solid fa-envelope"></i></a>`;
}

// 3. Générer la Mosaïque de Projets
const projectContainer = document.getElementById('project-container');
portfolioData.projects.forEach(proj => {
    let videoLinkHtml = proj.videoLink 
        ? `<a href="${proj.videoLink}" target="_blank">Voir la vidéo</a>` 
        : '';

    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <div class="project-info">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            ${videoLinkHtml}
        </div>
    `;
    projectContainer.appendChild(card);
});

// 4. Système de navigation (Page active)
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}