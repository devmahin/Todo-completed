// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");
// const todos = document.querySelector(".todos");

// function showFunction(e) {
//   let inputs = input.value;
//   // addTodo
//   let id = Date.now().toString();
//   if (inputs === "") {
//     alert("Please input value add");
//   } else {
//     addTodo(inputs, id);
//     input.value = "";
//     input.focus();
//   }
//   // localstores
//   let gItem = getTodosLocalStores();
//   if (inputs.trim() != 0) {
//     gItem.push({ inputs, id });
//     let sItem = localStorage.setItem("todo", JSON.stringify(gItem));
//   }
// }

// const getTodosLocalStores = () => {
//   return localStorage.getItem("todo")
//     ? JSON.parse(localStorage.getItem("todo"))
//     : [];
// };

// function addTodo(input, id) {
//   let todo = localStorage.getItem("todo");
//   let todos = JSON.parse(todo);

//   todos.forEach((value,id) => {
//     let ul = document.createElement("ul");
//     ul.id = id;
//     ul.setAttribute("class", "elem");
//     ul.innerHTML = `
//
//     `;
//     })
//   todos.appendChild(ul);

//   let deletes = ul.querySelector("#delete");
//   deletes.addEventListener("click", deleteFun);

//   // < ul class="elem" id = "${id}" >
//   // </ul>
// }

// btn.addEventListener("click", showFunction);

// function display() {
//   let gItem = getTodosLocalStores();
//   gItem.forEach((value) => {
//     // console.log(value);
//     addTodo(value.inputs, value.id);
//   });
// }

// function editTodo(id) {

//   let todo = localStorage.getItem("todo");
//   let todos = JSON.parse(todo);

//   todos.filter((val, index) => {
//     console.log(val.inputs)
//     console.log((input.value = val[id]));
//   });
// }

// function deleteFun(e) {
//   let elem = e.target.parentElement.parentElement;
//   todos.removeChild(elem);

//   let todo = getTodosLocalStores();
//   todo = todo.filter((ele) => ele.id !== elem.id);
//   let sItem = localStorage.setItem("todo", JSON.stringify(todo));

//   // console.log(todos);
// }

// // document.querySelector(".text_change").todos2.addEventListener("click", editTodo)

// window.addEventListener("DOMContentLoaded", display);

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
  addtaskInput = input.value;

  // let webtask = localStorage.getItem("localtask")
  // if (webtask == null) {
  //   taskObj = []
  // } else {
  //   taskObj = JSON.parse(webtask)
  // }

  // taskObj.push(addtaskInput)
  // localStorage.setItem("localtask", JSON.stringify(taskObj))

  if (addtaskInput.trim() != 0) {
    let gItem = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  gItem.push(addtaskInput);
  localStorage.setItem("todo", JSON.stringify(gItem));
  }
showTodo()

});




function showTodo() {
  const todos = document.querySelector(".todos")
  let gItem = localStorage.getItem("todo")
  let gItemVal = JSON.parse(gItem)
  let html = "";
  gItemVal.forEach((value, index) => {
    console.log(value)
    html += `
    <ul class="elem">
      <div class="elemEle">
      <h2>${index+1}</h2>
        <input type="checkbox"/>
        <li>${value}</li>
      </div>
      <div class="icon">
        <i class="text_change ri-file-text-line" onclick="editTask(${index})"></i>
        <i class="ri-check-line"></i>
        <i class=" ri-delete-bin-line" id="delete"></i>
      </div>
    </ul>`;
    todos.innerHTML = html
  })
}

function editTask(index) {
  const id1 = document.querySelector(".id1")
  const id2 = document.querySelector(".id2")

  let gItem = localStorage.getItem("todo")
  let gItemVal = JSON.parse(gItem)
  console.log(gItemVal)
  console.log(gItemVal[index])
  input.value = gItemVal[index]  

  id1.style.display = "none"
  id2.style.display = "block"
}

showTodo()
