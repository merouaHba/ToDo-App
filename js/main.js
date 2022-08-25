
let filters = document.querySelectorAll(".filter li");
let addInput = document.querySelector('.write input');
let listItems = document.querySelector('.todo-list');
let dragStartIndex;
let arrayOfTasks = [];
if (localStorage.getItem('tasks')) {
    arrayOfTasks = JSON.parse(localStorage.getItem('tasks'))
}

// nbr items left 
let nbrItems = new NbrItems(arrayOfTasks);
nbrItems.nbrItems();


let toDoApp = new ToDoApp(filters, addInput, listItems, arrayOfTasks, dragStartIndex);
toDoApp.getTaskFromLocalStorage();



addInput.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        if (addInput.value != '') {
          toDoApp.addTasks(addInput.value);
        }
    }
})

















// toggle dark mode
// add theme to localStorage
let mode;
let icon = document.querySelector('.mode-icon')

let darkMode = new DarkMode(mode,icon)

let toggle = document.getElementById('toggle');
toggle.addEventListener('click', darkMode.toggleMode);

darkMode.getThemeFromLocalStorage();









// filter taches

filters.forEach((el) => {
    el.addEventListener("click", (e) => {
        filters.forEach((el) => { el.classList.remove('active') })
        el.classList.add('active');
        window.localStorage.setItem('activeFilter', el.dataset.filter);
        toDoApp.filter(e.currentTarget);
    })
})


// clear All taches
let clearCompleted = new ClearCompleted(arrayOfTasks);
let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearCompleted.clearCompleted)



toDoApp.filterOnLoad();

