class ToDoApp extends DragAndDrop {
    constructor(filters, addInput, listItems, arrayOfTasks, dragStartIndex) {
        super(dragStartIndex)
        this.filters = filters;
        this.addInput = addInput;
        this.listItems = listItems;
        this.arrayOfTasks = arrayOfTasks;
    }


// add task to arrayOfTasks
    addTasks(taskText) {
        const task = {
            id: Date.now(),
            title: taskText,
            completed: false,
        };
        arrayOfTasks.push(task);
        console.log(task);
        this.addElementsToPageFromArray(arrayOfTasks);
        this.addTaskToLocalStorage(arrayOfTasks);
        addInput.value = '';
        super.nbrItems();
        this.filterOnLoad();
    }




// add elements to page from array of tasks
    
    addElementsToPageFromArray(arrayOfTasks) {
        let icon;
        listItems.innerHTML = '';

        arrayOfTasks.forEach((task, i) => {
            const listItem = document.createElement('li');
            if (task.completed) {
                listItem.className = "done";
                icon = 'bxs-check-circle';
            } else {
                icon = 'bx-circle';
            }
            listItem.setAttribute('data-index', i + 1);
            listItem.setAttribute('data-id', task.id);
            listItem.setAttribute('draggable', true);
            listItem.innerHTML += `
            <span> <i class='check bx ${icon}' ></i></span>
            <input type="text" value='${task.title}' readonly>
             <span class="delete"><i class='bx bx-x'></i></span>
      `;
            console.log(task.title);
            listItems.appendChild(listItem);
            this.removeItem();
            this.edit();
            
        })
        super.addEventListeners(() => {
            this.addTaskToLocalStorage(arrayOfTasks);
            this.addElementsToPageFromArray(arrayOfTasks);
            this.filterOnLoad();
        });
        this.check();


    }


    // add task to local storage

    addTaskToLocalStorage(arrayOfTasks) {
        window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
    }

    // get task from local storage

    getTaskFromLocalStorage() {
        let data = window.localStorage.getItem('tasks');
        if (data) {
            let tasks = JSON.parse(data);
            this.addElementsToPageFromArray(tasks);
        }
    }
    // edit task 
    edit() {
        let taches = document.querySelectorAll('.todo-list li input');
        taches.forEach((tache, i) => {
            tache.addEventListener('dblclick', () => {
                if (tache.hasAttribute('readonly')) {
                    tache.toggleAttribute('readonly', false);
                    tache.style.cursor = 'auto';
                    tache.style.textDecoration = 'auto';
                    tache.style.color = '#000';

                }
            });
            tache.addEventListener('keypress', (e) => {
                if (e.keyCode == 13) {
                    if (tache.value != '') {
                        tache.toggleAttribute('readonly', true);
                        arrayOfTasks[i].title = tache.value;
                        this.addTaskToLocalStorage(arrayOfTasks);
                        this.addElementsToPageFromArray(arrayOfTasks);
                        this.filterOnLoad();
                    }
                }
            })
        })

    }
   

    // delete task from local storage

    deleteTaskFromLocalStorage(id) {
        arrayOfTasks = arrayOfTasks.filter((task) => task.id != id)
        this.addTaskToLocalStorage(arrayOfTasks);
    }




// remove tache 

    removeItem() {
        let removeButtons = document.querySelectorAll('.delete');
        removeButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                let li = e.target.parentElement.parentElement;
                this.deleteTaskFromLocalStorage(li.dataset.id);
                this.getTaskFromLocalStorage();
                super.nbrItems();
                this.filterOnLoad();


            })
        })
    }





    // toggle completed status
    toggleStatus(id) {
        arrayOfTasks.forEach((task) => {
            if (task.id == id) {
                task.completed = task.completed ? false : true;
            }
        })
        super.nbrItems();
        this.addElementsToPageFromArray(arrayOfTasks);
        this.addTaskToLocalStorage(arrayOfTasks);
    }


    // check completed
    check() {
        let checkBtns = document.querySelectorAll(".check");
        checkBtns.forEach((el) => {
            el.addEventListener("click", (e) => {
                this.toggleStatus(e.currentTarget.parentElement.parentElement.dataset.id);
                filters.forEach((el) => {
                    if (el.classList.contains('active')) {
                        this.filter(el)
                    }

                })
            })
        })
    }




// filter taches
    filter(el) {
        let btn = el;
        if (btn.dataset.filter === "all") {
            this.addElementsToPageFromArray(arrayOfTasks);
        }
        else if (btn.dataset.filter === "completed") {
            let completedtasks = arrayOfTasks.filter((task) => task.completed)
            this.addElementsToPageFromArray(completedtasks);
        } else {
            let activetasks = arrayOfTasks.filter((task) => !task.completed)
            this.addElementsToPageFromArray(activetasks);
        }
    }



// filter taches onloading
    
    filterOnLoad() {
        if (window.localStorage.getItem('activeFilter')) {
            let active = window.localStorage.getItem('activeFilter');
            filters.forEach((el) => {
                if (el.dataset.filter == active) {
                    filters.forEach((el) => {
                        el.classList.remove('active');
                    })
                    el.classList.add('active');
                    this.filter(el);
                }
            })
        }
    }



}

