document.querySelector("#add").onclick = function() {
    if (document.querySelector("#text").value.length == 0){
        alert("Please Enter Task");
    } else {
        document.querySelector(".tasks").innerHTML += `
        <div>
            <input type="checkbox">
            <span>
                ${document.querySelector("#text").value}
            </span>
            <button value=submit>Delete</button>
        </div>
        `
    }
}