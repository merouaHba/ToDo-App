class ClearCompleted extends ToDoApp {
    constructor(arrayOfTasks) {
        super(arrayOfTasks);
    }


    // clear All taches
    clearCompleted() {
        arrayOfTasks = arrayOfTasks.filter((task) => !task.completed);
        super.addTaskToLocalStorage(arrayOfTasks);
        super.addElementsToPageFromArray(arrayOfTasks);
        super.filterOnLoad();
    }


 

}