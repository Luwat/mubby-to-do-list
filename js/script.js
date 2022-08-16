let add = document.querySelector("#add")
let task = document.querySelector(".tasks")
let text = document.querySelector("#text")

const addTask = () => {
    if (text.value.length == 0){
        alert("Please Enter Task");
    } else {
        task.innerHTML += `
            <div class="task">
                <div class=here>
                    <input type="checkbox" id="checked">
                    <span>
                        ${text.value}
                    </span>
                </div>
                <button class="delete" value="delete">Delete</button>
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

add.addEventListener('click', addTask)