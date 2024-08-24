let lists = document.getElementsByClassName("list");
let leftbox = document.getElementById("left");
let rightbox = document.getElementById("right");
//   to drag the item from left to right or from right to left
for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target; // to select the drag item

    // to drag over  the selected item into rightbox
    rightbox.addEventListener("dragover", function (e) {
      e.preventDefault(); // while dragging between two boxex to prevent any default feature
    });

    //   to drop the selected item
    rightbox.addEventListener("drop", function (e) {
      rightbox.appendChild(selected);
      selected = null;
    });

    // to drag over  the selected item into leftbox
    leftbox.addEventListener("dragover", function (e) {
      e.preventDefault(); // while dragging between two boxex to prevent any default feature
    });

    //   to drop the selected item
    leftbox.addEventListener("drop", function (e) {
      leftbox.appendChild(selected);
      selected = null;
    });
  });
}
