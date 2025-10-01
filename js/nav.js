// js/nav.js

// Generate the navigation HTML
const navHTML = NAVIGATIONS.map(item => {
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