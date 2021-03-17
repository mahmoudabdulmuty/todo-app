const addForm = document.querySelector('.add-form')
const todos = document.querySelector('.todos')
const search = document.querySelector('.search-form input')
// generating todo
const generateTodo = todo =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>`
        todos.innerHTML += html
}

// filtering todos
const filterTodos = (term)=>{
    Array.from(todos.children)
    .filter(todo=>!todo.textContent.toLowerCase().includes(term))
    .forEach(todo=> todo.classList.add('filtered'))

    Array.from(todos.children)
    .filter(todo=>todo.textContent.toLowerCase().includes(term))
    .forEach(todo=> todo.classList.remove('filtered'))
}

search.addEventListener('keyup', e=>{
    const term = search.value.toLowerCase()
    filterTodos(term)
})

// adding todo
addForm.addEventListener('submit', e=>{
    e.preventDefault()
    const newTodo = addForm.add.value.trim()
    if(newTodo.length){
        generateTodo(newTodo)
        addForm.reset()
    }
})
// removing todo
todos.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})