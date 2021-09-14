import { App } from '../app.js'
let tasksArr = []
function setTasks(){
    let _DBTasks = JSON.parse(localStorage.getItem('tasks'))
    _DBTasks ? tasksArr = _DBTasks : false
    
}
setTasks()
window.createTask = function createTask(event){
    if (event.target.value){
        let task = {
            state: false,
            id:'_id',
            title: event.target.value
        }
        tasksArr.unshift(task)
        localStorage.setItem('tasks', JSON.stringify(tasksArr))
        App()
    }
}
window.keyEnter = function keyEnter(event){
    if (event.keyCode === 13) {
        createTask(event)
    }
}
window.toggleToolBar =  function toggleToolBar(elemID, index){
    let state = tasksArr[index].state
    if (state){
        elemID.style.right = '-600px'
        tasksArr[index].state = false
    }else{
        elemID.style.right = '0'
        tasksArr[index].state = true
    }
}
window.enableTaskInput = function enableTaskInput(event){
    event.target.removeAttribute('readonly')
}
window.updateTask = function updateTask(event, index){
    let task = {
        state: false,
        id: '_id',
        title: event.target.value
    }
    tasksArr[index] = task
    localStorage.setItem('tasks', JSON.stringify(tasksArr))

    event.target.setAttribute('readonly', 'readonly')

}
window.deleteTask = function deleteTask(index){
    tasksArr.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasksArr))
    App()
}
export function TaskPage() {
    let myTEMP = `
        <section class='py-4'>
            <input onkeypress="keyEnter(event)" onblur='createTask(event)' placeholder='Create New Task...' class='px-4 cM0-dark fM0-size-a w-100 M0-Create-new-task cM0-white'>
        </section>
        <seciton id='myTasks'>
        `
    for (let [index, task] of tasksArr.entries()){
        myTEMP += `
                    <div class=' M0-task-card cM0-bg-white fM0-size-b rounded d-flex align-items-center position-relative overflow-hidden mb-4'>
                        <input class='iM0-size-a mr-4 ml-5' type='checkbox'>
                        <input ondblclick='enableTaskInput(event)' onblur='updateTask(event, ${index})' readonly class='border-0 cM0-bg-white' type='text' value='${task.title}'>
                        <div id='${task.id+index}' class='h-100 d-flex position-absolute M0-tool-bar'>
                            <div onclick='toggleToolBar(${task.id + index}, ${index})' class='uM0-click cM0-bg-dark h-100 d-flex align-items-center justify-content-center M0-more-tools'>
                                <i class='iM0-moreTask iM0-size-a d-inline-block uM0-image-contain'></i>
                            </div>

                            <div class='cM0-bg-dark h-100 d-flex align-items-center justify-content-center M0-tools'>
                            </div>
                            <div class='cM0-bg-dark h-100 d-flex align-items-center justify-content-center M0-tools'>
                                <i class='iM0-reminder iM0-size-a d-inline-block uM0-image-contain'></i>
                            </div>
                            <div class='cM0-bg-dark h-100 d-flex align-items-center justify-content-center M0-tools'>
                                <i class='iM0-moreTask iM0-size-a d-inline-block uM0-image-contain'></i>
                            </div>
                            <div class='cM0-bg-dark h-100 d-flex align-items-center justify-content-center M0-tools'>
                                <i class='iM0-moreTask iM0-size-a d-inline-block uM0-image-contain'></i>
                            </div>

                            <div onclick='deleteTask(${index})' class='uM0-click cM0-bg-dark h-100 d-flex align-items-center justify-content-center M0-tools'>
                                <i class='iM0-delete iM0-size-a d-inline-block uM0-image-contain'></i>
                            </div>
                        </div>
                    </div>
                `
    }
    myTEMP +=    `
        </section>
        `
    return myTEMP
}