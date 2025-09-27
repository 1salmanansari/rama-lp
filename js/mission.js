// Mission section data
const missionData = {
    title: "Our Mission",
    subtitle: "Empowering businesses and individuals to achieve their full potential through innovative solutions and exceptional service.",
    text: "We are committed to creating a positive impact in the world by developing products and services that solve real problems, enhance lives, and contribute to a sustainable future. Our mission drives everything we do, from the way we design our products to how we interact with our customers and communities.",
    stats: [
        { number: "10K+", label: "Happy Customers" },
        { number: "99%", label: "Customer Satisfaction" },
        { number: "24/7", label: "Support Available" }
    ]
};

// Generate mission section HTML
const generateMissionSection = () => {
    const statsHTML = missionData.stats.map(stat => `
        <div class="stat">
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    return `
        <div class="container">
            <div class="mission-content">
                <h2 class="section-title fade-in">${missionData.title}</h2>
                <p class="section-subtitle fade-in">${missionData.subtitle}</p>
                <div class="mission-text fade-in">
                    <p>${missionData.text}</p>
                </div>
                <div class="mission-stats fade-in">
                    ${statsHTML}
                </div>
            </div>
        </div>
    `;
};

// Render mission section
const renderMissionSection = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = generateMissionSection();
    }
};

// Usage:
renderMissionSection('mission');
// Or: document.body.innerHTML += generateMissionSection();