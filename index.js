const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]

class SetLesson {
  constructor(idTask, status, textTask) {
    this.idTask = idTask
    this.Tsatus = status
    this.textTask = textTask
  }

  newElt() {
    let TaskElt = document.createElement('div')
    TaskElt.className = 'task-item'
    TaskElt.dataset.taskId = this.idTask
    return TaskElt
  }

  createCheckBox() {
    const checkBoxForm = document.createElement('form')
    checkBoxForm.className = 'checkbox-form'

    const newCheckBoxElt = document.createElement('input')
    newCheckBoxElt.type = 'checkbox'
    newCheckBoxElt.className = 'checkbox-form__checkbox'
    newCheckBoxElt.id = `task-${this.idTask}`

    const labelCheckBox = document.createElement('label')
    labelCheckBox.htmlFor = `task-${this.idTask}`

    const taskSpan = document.createElement('span')
    taskSpan.className = 'task-item__text'
    taskSpan.innerText = this.textTask

    checkBoxForm.append(newCheckBoxElt, labelCheckBox)
    return [checkBoxForm, taskSpan]
  }

  createDeleteButton() {
    const deleteButton = document.createElement('button')
    deleteButton.className =
      'task-item__delete-button default-button delete-button'
    deleteButton.innerHTML = 'Удалить'
    return deleteButton
  }

  createAndPutElt() {
    let TaskItemMainContainer = document.createElement('div')
    TaskItemMainContainer.className = 'task-item__main-container'

    let TaskItemMainContent = document.createElement('div')
    TaskItemMainContent.className = 'task-item__main-content'

    const taskList = document.querySelector('.tasks-list')

    const TaskElt = this.newElt()
    const [checkBox, taskSpan] = this.createCheckBox()
    const deleteButton = this.createDeleteButton()

    TaskItemMainContent.append(checkBox, taskSpan)
    TaskItemMainContainer.append(TaskItemMainContent, deleteButton)
    TaskElt.append(TaskItemMainContainer)
    taskList.append(TaskElt)
  }
}

tasks.forEach((task) => {
  let taskEltFromList = new SetLesson(task.id, task.completed, task.text)
  taskEltFromList.createAndPutElt()
})
