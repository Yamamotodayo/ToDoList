'use strict'
/*
let save = document.getElementById("save")
save.addEventListener('click', addList)

function addList() {
    let todo = document.getElementById("todo")
    
    let ul = document.getElementById("list")

    // for(let i = 0; i < n; i++) {

    // }
    
    let newLi = document.createElement("li") // li要素作成
        newLi.className = "list-group-item"       // li要素にクラス名追加

    let newTodoValue = document.createTextNode(todo.value) // 入力された文字でテキストノード作成

    let newDeliteBtn = document.createElement('button') // li要素を削除するボタンを追加
        newDeliteBtn.append("削除")
        newDeliteBtn.setAttribute('onclick', 'deleteItem()') // onclick属性追加

    ul.appendChild(newLi) // ulの子要素にliを追加
    newLi.appendChild(newTodoValue) // liの子要素にToDoで入力された値を追加
    newLi.appendChild(newDeliteBtn) // liの子要素にli要素を削除するボタンを追加
}

function deleteItem() {
    
}
*/

const taskValue = document.getElementsByClassName("task-value")[0]
const taskSubmit = document.getElementsByClassName("task-submit")[0]
const taskList = document.getElementsByClassName("task-list")[0]

const addTask = (task) => {
    // 入力したタスクを表示・追加
    const listItem = document.createElement('li')
    const showItem = taskList.appendChild(listItem)
    showItem.innerHTML = task

    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '削除'
    listItem.appendChild(deleteButton)

    // 削除ボタンをクリックし、イベント発動(タスクが削除)
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault()
        deleteTasks(deleteButton)
    })
}

const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li')
    taskList.removeChild(chosenTask)
}

taskSubmit.addEventListener('click', evt => {
    evt.preventDefault()
    const task = taskValue.value
    addTask(task)
    taskValue.value = ""
})