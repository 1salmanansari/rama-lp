const navItems = [
    {
        type: 'link',
        href: '#',
        text: 'Home',
        className: 'nav-link active',
        dataPage: 'main'
    },
    {
        type: 'link',
        href: '#about',
        text: 'About',
        className: 'nav-link',
        dataSection: 'about'
    },
    {
        type: 'dropdown',
        href: '#products-section',
        text: 'Products',
        className: 'nav-link',
        dataSection: 'products-section',
        icon: 'fas fa-chevron-down dropdown-icon',
        dropdownItems: [
            { href: '#', text: 'Premium Solutions', icon: 'fas fa-star', dataPage: 'products', dataProduct: 'premium' },
            { href: '#', text: 'Innovation Series', icon: 'fas fa-lightbulb', dataPage: 'products', dataProduct: 'innovation' },
            { href: '#', text: 'Elite Collection', icon: 'fas fa-crown', dataPage: 'products', dataProduct: 'elite' },
            { href: '#', text: 'Smart Choice', icon: 'fas fa-brain', dataPage: 'products', dataProduct: 'smart' },
            { href: '#', text: 'Professional Grade', icon: 'fas fa-briefcase', dataPage: 'products', dataProduct: 'professional' },
            { href: '#products-section', text: 'View All Products', icon: 'fas fa-th-large', dataSection: 'products-section' }
        ]
    },
    {
        type: 'link',
        href: '#mission',
        text: 'Mission',
        className: 'nav-link',
        dataSection: 'mission'
    },
    {
        type: 'link',
        href: '#contact',
        text: 'Contact',
        className: 'nav-link',
        dataSection: 'contact'
    }
];

// Generate the navigation HTML
const navHTML = navItems.map(item => {
    if (item.type === 'dropdown') {
        const dropdownHTML = item.dropdownItems.map(dropItem => `
            <a href="${dropItem.href}" class="dropdown-item" 
               ${dropItem.dataPage ? `data-page="${dropItem.dataPage}"` : ''} 
               ${dropItem.dataProduct ? `data-product="${dropItem.dataProduct}"` : ''} 
               ${dropItem.dataSection ? `data-section="${dropItem.dataSection}"` : ''}>
                <i class="${dropItem.icon}"></i>${dropItem.text}
            </a>
        `).join('');

        return `
            <li class="nav-item">
                <a href="${item.href}" class="${item.className}" 
                   ${item.dataSection ? `data-section="${item.dataSection}"` : ''}>
                    ${item.text}
                    <i class="${item.icon}"></i>
                </a>
                <div class="dropdown-menu">
                    ${dropdownHTML}
                </div>
            </li>
        `;
    } else {
        return `
            <li class="nav-item">
                <a href="${item.href}" class="${item.className}" 
                   ${item.dataPage ? `data-page="${item.dataPage}"` : ''} 
                   ${item.dataSection ? `data-section="${item.dataSection}"` : ''}>
                    ${item.text}
                </a>
            </li>
        `;
    }
}).join('');

// To insert into the DOM:
document.querySelector('.nav-menu').innerHTML = navHTML;