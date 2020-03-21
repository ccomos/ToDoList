// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// write your code here
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function () {
  //console.log(this)
  //console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  if (inputValue.trim() !== ""){
    addItem(inputValue)
  } 
})

// Enter鍵
document.addEventListener('keypress', function (event) {
  let inputValue = document.querySelector('#newTodo').value
  if (inputValue.trim() !== "" && event.keyCode === 13){ 
    addItem(inputValue)    
  } 
})

// todo list Delete and done
let todoList = document.querySelector("#my-todo")
let doneList = document.querySelector("#my-done")
todoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {  //使刪除是發生在點擊delete icon上
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL') { 
    let li = event.target.parentElement
    li.remove()
    let done = event.target.innerText
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="done" class='checked'>${done}</label>
    <i class="delete fa fa-trash"></i>
  `
  doneList.appendChild(newItem)
  }
})

// done list Delete and return todo
doneList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {  
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL')
      {
      let li = event.target.parentElement
      let todo = event.target.innerText
      addItem(todo)
      li.remove()
    } 
})