const inputBox = document.getElementById("input-box");
// const btn = document.getElementById("submit");
const listcontainer = document.getElementById("list-container");

function addTask(event) {
  event.preventDefault();
  if (inputBox.value === "") {
    //alert when input field empty
    alert("You must write something");
  } else {
    //create a list fot task
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    inputBox.value = "";

    //create span for delete-icon
    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);

    //create span for edit-icon
    let editspan = document.createElement("span");
    editspan.innerHTML = "📝";
    li.appendChild(editspan);
  }
  storeData();
}

listcontainer.addEventListener(
  "click",
  (e) => {
    //for check on completed task
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storeData();
    } else if (e.target.innerHTML === "📝") {
      //edit task when edit icon clicked

      let newTaskContent = prompt("Edit your Task",e.target.parentElement.firstChild.textContent.trim());
      if (newTaskContent && newTaskContent !== e.target.parentElement.firstChild.textContent.trim()) {
        //After check newtask not null and actuall changes applied
        e.target.parentElement.firstChild.textContent = newTaskContent;
        storeData();
      }
    } else if (e.target.tagName === "SPAN") {
        //Delete Task
      e.target.parentElement.remove();
      storeData();
    }
  },
  false
);

//To Store Task in localstorage
function storeData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

//To Show StoredData 
function showData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showData();

// btn.addEventListener('click',()=>{
//     addTask();

// });
