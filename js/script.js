document.querySelector("#add").onclick = function() {
    if (document.querySelector("#text").value.length == 0){
        alert("Please Enter Task");
    } else {
        document.querySelector(".tasks").innerHTML += `
        <div class="task">
            <div class="lists">
                <input type="checkbox">
                <span>
                    ${document.querySelector("#text").value}
                </span>
                <button class="delete" value="delete">Delete</button>
            </div>
        </div>
        `;

        let taskNow = document.querySelectorAll(".delete");
        for(let i=0; i<taskNow.length; i++){
            taskNow[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}