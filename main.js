let darkModeOn = false
function darkMode() {
    if (darkModeOn === false) {
            document.documentElement.style.setProperty('--black', '#ffffff')
            document.documentElement.style.setProperty('--white', '#000000')
            document.documentElement.style.setProperty('--blue', '#8484ff')
            document.documentElement.style.setProperty('--lightblue', '#0000ff')

        darkModeOn = true
    } else {
        document.documentElement.style.setProperty('--black', '#000000')
        document.documentElement.style.setProperty('--white', '#ffffff')
        document.documentElement.style.setProperty('--blue', '#0000ff')
        document.documentElement.style.setProperty('--lightblue', '#8484ff')
        darkModeOn = false
    }
}

export {darkMode}