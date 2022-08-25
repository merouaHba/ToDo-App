class ClearCompleted  {
    constructor(filters, addInput, listItems, arrayOfTasks, dragStartIndex) {
        this.dragStartIndex = dragStartIndex;
        this.filters = filters;
        this.addInput = addInput;
        this.listItems = listItems;
        this.arrayOfTasks = arrayOfTasks;
    }


    // clear All taches
    clearCompleted() {
        let toDoApp = new ToDoApp(filters, addInput, listItems, arrayOfTasks, dragStartIndex);
        arrayOfTasks = arrayOfTasks.filter((task) => !task.completed);
        toDoApp.addTaskToLocalStorage(arrayOfTasks);
        toDoApp.addElementsToPageFromArray(arrayOfTasks);
        toDoApp.filterOnLoad();
    }


 

}