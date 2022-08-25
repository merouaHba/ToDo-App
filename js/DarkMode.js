class DarkMode {
    constructor(mode,icon) {
        this.mode = mode;
        this.icon = icon;
    }





    getThemeFromLocalStorage() {
        if (window.localStorage.getItem('mode')) {
            let theme = window.localStorage.getItem('mode');
            if (theme === 'dark') {
                document.body.classList.add('dark');
            }
            console.log(theme);
            if (theme === 'dark') {
                icon.setAttribute('class', 'bx bxs-sun')
            } else {
                icon.setAttribute('class', 'bx bxs-moon')
            }
        }
    }


    toggleMode() {
        document.body.classList.toggle('dark');
        // this.addThemeToLocalStorage();
         // add theme to localStorage
        mode = document.body.getAttribute('Class');
        window.localStorage.setItem('mode', mode);
        if (mode == 'dark') {
            icon.setAttribute('class', 'bx bxs-sun')
        } else {
            icon.setAttribute('class', 'bx bxs-moon')
        }
    }

}