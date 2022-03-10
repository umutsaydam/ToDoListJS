var i = 1;

function toDoAdd() {
    var toDo = document.getElementById("toDo");

    if (toDo.value != "") {
        var toDoArr = toDo.value.split("-");

        var styles = `
        <div class="action" id="action">
            <div class="checkbox-area">
                <input type="checkbox" id="${i}" onClick="checkList(${i});">
             </div>
            <div class="action-list" id="${++i}">
                <h3>${toDoArr[0]}</h3>
                <p class="description">${(toDoArr[1] == undefined) ? "" : toDoArr[1]}</p>
            </div>
        </div>`;

        let actionArea = document.getElementById("list-toDo");
        actionArea.insertAdjacentHTML("Beforeend", styles);
        i++;

        toDo.value = "";
    }
}

function checkList(action) {
    var getId = document.getElementById(++action);
    getId.style.textDecoration = "line-through";
}

function removeAll() {
    var removeA = document.getElementById("list-toDo");
    if (removeA) {
        removeA.remove();
    }
}

