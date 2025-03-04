// Navbar Handling
const navbarButton = document.getElementById('navbar-toggle');
const navbarContainer = document.getElementById('navbar');
const contentContainer = document.querySelector('.content');


navbarButton.addEventListener('click', toggleNavbar);


function toggleNavbar() {
    navbarContainer.classList.toggle('close');
    contentContainer.classList.toggle('expand');
}


// Theme Handling
const themePath = './resources/css/theme/';
const themeLink = document.getElementById('theme-style');               // Get the <link>
const themeButton = document.getElementById('theme-toggle');           // Get the dropdown button
const themeDropdown = document.getElementById('theme-dropdown')        // Get the dropdown-menu


themeButton.addEventListener('click', toggleTheme);
themeDropdown.addEventListener('click', changeTheme)
document.addEventListener('click', closeDropdown);


document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.getElementById('theme-style').href = themePath + savedTheme + '.css';
        document.getElementById('theme-select').value = savedTheme;
    }
});

function toggleTheme(event) {
    event.stopPropagation();
    themeDropdown.classList.toggle('show');
}

function changeTheme(event) {
    if (event.target.tagName == 'LI') {
        const theme = event.target.getAttribute('data-theme');

        themeLink.href = themePath + theme + '.css';    // Load the selected theme file
        localStorage.setItem('theme', theme);           // Save the selected theme

        closeDropdown();
    }
}

function closeDropdown(event) {
    if (!event
        || (!themeButton.contains(event.target) && !themeDropdown.contains(event.target))
        ) {
        themeDropdown.classList.remove('show');
    }
}
