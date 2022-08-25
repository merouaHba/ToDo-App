class ClearCompleted extends ToDoApp {
    constructor(arrayOfTasks) {
        super(arrayOfTasks);
    }


    // clear All taches
    clearCompleted() {
        arrayOfTasks = arrayOfTasks.filter((task) => !task.completed);
        supper.addTaskToLocalStorage(arrayOfTasks);
        supper.addElementsToPageFromArray(arrayOfTasks);
        supper.filterOnLoad();
    }


 

}