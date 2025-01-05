let darkMode = localStorage.getItem('darkMode');
const darkModeButton = document.getElementById('darkModeButton');

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode','active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'active') enableDarkMode()
darkModeButton.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== 'active' ? enableDarkMode() : disableDarkMode();
    }   
)