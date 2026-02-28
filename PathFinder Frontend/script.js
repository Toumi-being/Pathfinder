function loginUser(event) {
    event.preventDefault();
    window.location.href = "home.html";
}

function addPost(){
    const input=document.getElementById("postInput");
    const feed=document.getElementById("feedArea");
    const username=localStorage.getItem("username");

    if(input.value.trim()==="") return;

    const post=document.createElement("div");
    post.className="post";
    post.innerHTML=`
        <strong>${username}</strong>
        <p>${input.value}</p>
        <div style="margin-top:10px;color:#555">
            <i class="fa fa-comment"></i> Comment
            &nbsp;&nbsp;
            <i class="fa fa-share"></i> Share
        </div>
    `;
    feed.prepend(post);
    input.value="";
}

function logout(){
    localStorage.removeItem("username");
    window.location.href="login.html";
}

function setActive(element){
    document.querySelectorAll(".sidebar li").forEach(li=>{
        li.classList.remove("active");
    });
    element.classList.add("active");
}

function toggleDropdown(){
    const dropdown=document.getElementById("careerDropdown");
    dropdown.style.display = dropdown.style.display==="block" ? "none" : "block";
}

/* --- TO-DO LIST FUNCTIONS (JUST ADDED) --- */

document.addEventListener("DOMContentLoaded", () => {
    const tasks = JSON.parse(localStorage.getItem("pathfinder_tasks")) || [];
    tasks.forEach(taskText => {
        renderTask(taskText);
    });
});

function addTask() {
    const input = document.getElementById("todoInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    renderTask(taskText);
    saveTaskToLocal(taskText);
    input.value = "";
}

function renderTask(taskText) {
    const ul = document.getElementById("todoList");
    if (!ul) return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this, '${taskText}')">Delete</button>
    `;
    ul.appendChild(li);
}

function saveTaskToLocal(taskText) {
    let tasks = JSON.parse(localStorage.getItem("pathfinder_tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("pathfinder_tasks", JSON.stringify(tasks));
}

function deleteTask(button, taskText) {
    button.parentElement.remove();
    let tasks = JSON.parse(localStorage.getItem("pathfinder_tasks")) || [];
    tasks = tasks.filter(t => t !== taskText);
    localStorage.setItem("pathfinder_tasks", JSON.stringify(tasks));
}