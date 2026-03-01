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

/* ========================================= */
/* TO-DO TRACKER LOGIC (NEW ADDITION ONLY)  */
/* ========================================= */

function addTodo() {
    const input = document.getElementById("todoInput");
    const list = document.getElementById("todoList");

    if (input.value.trim() === "") {
        alert("Please enter a goal!");
        return;
    }

    const li = document.createElement("li");
    li.className = "todo-item"; // style.css theke design pabe
    
    // Original design maintain kore delete icon shoho goal add kora
    li.innerHTML = `
        <span>${input.value}</span>
        <i class="fa fa-trash todo-delete" style="color:#ff4d4d; cursor:pointer;" onclick="this.parentElement.remove()"></i>
    `;
    
    list.appendChild(li);
    input.value = "";
}