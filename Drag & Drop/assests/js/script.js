let listItems = document.querySelectorAll(".list")
let secondList = document.querySelector(".second-list")
let firstList = document.querySelector(".first-list")

for (listItem of listItems) {
    listItem.addEventListener("dragstart", function (e) {
        // Get the selected item when start dragging it
        let selected = e.target ; 
        // Prevent the default behavior of second list when an item is draged over it
        secondList.addEventListener("dragover", function (e) {
            e.preventDefault();
        }) ; 
        // add the dragged item to second list when dragging finished
        secondList.addEventListener("drop" , function(e){
            secondList.appendChild(selected) ;
            selected = null ;
        });
        firstList.addEventListener("dragover",function(e){
            e.preventDefault() ;
        });
        firstList.addEventListener("drop",function(e)
        {
            firstList.appendChild(selected);
            selected = null ;
        });
    });


}
