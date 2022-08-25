class NbrItems {
    constructor(arrayOfTasks) {
        this.arrayOfTasks = arrayOfTasks;
    }
    // calcul nbr of tasks left
    nbrItems() {
        let array = arrayOfTasks.filter((task) => !task.completed);
        let span = document.querySelector(".nbr-item");
        let items = array.length > 1 ? "items" : "item"
        span.innerHTML = `${array.length} ${items} left`;
    }
   


}