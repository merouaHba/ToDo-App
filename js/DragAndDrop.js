class DragAndDrop extends NbrItems {

    
    constructor(arrayOfTasks, dragStartIndex) {
        super(arrayOfTasks);
        this.dragStartIndex = dragStartIndex;
    }

    // calcul nbr of items left

    nbrItems() {
        super.nbrItems();
    }

// Drag and Drop functions


dragStart(e) {
    dragStartIndex = +e.target.getAttribute('data-index') - 1;
}

dragEnter() {
    this.classList.add('over');
}

dragLeave() {
    this.classList.remove('over');

}

dragOver(e) {
    e.preventDefault();
}

    dragDrop(e, functions) {
    const dragEndIndex = +e.currentTarget.getAttribute('data-index') - 1;
    this.swapItems(dragStartIndex, dragEndIndex,functions);
    e.currentTarget.classList.remove('over');
}
// Swap list items that are drag and drop
swapItems(fromIndex, toIndex,functions) {
    var swapArrayElements = function (arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    };
    swapArrayElements(arrayOfTasks, fromIndex, toIndex);
    console.log(arrayOfTasks)
    console.log(fromIndex);
    console.log(toIndex);
    functions();   
}


addEventListeners(functions) {
    const draggables = document.querySelectorAll('.todo-list');
    const dragListItems = document.querySelectorAll('.todo-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => { this.dragStart(e) });
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', this.dragOver);
        item.addEventListener('drop', (e) => { this.dragDrop(e, functions)});
        item.addEventListener('dragenter', this.dragEnter);
        item.addEventListener('dragleave', this.dragLeave);
    });
}
}