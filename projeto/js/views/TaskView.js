// Classe TaskView para gerenciar a interface do usuário e eventos
class TaskView {
    constructor() {
        this.app = document.querySelector('#root');
        this.form = this.createElement('form');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add a new task';
        this.submitButton = this.createElement('button', 'AddTask');
        this.taskList = this.createElement('ul', 'task-list');

        this.form.append(this.input, this.submitButton);
        this.app.append(this.form, this.taskList);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    get _taskText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }

    displayTasks(tasks) {
        while (this.taskList.firstChild) {
            this.taskList.removeChild(this.taskList.firstChild);
        }

        tasks.forEach(task => {
            const li = this.createElement('li');
            li.id = task.id;
            li.textContent = task.title;
            if (task.completed) li.classList.add('completed');
            const deleteButton = this.createElement('button', 'Delete');
            li.append(deleteButton);
            this.taskList.append(li);
        });
    }

    bindAddTask(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            if (this._taskText) {
                handler(this._taskText);
                this._resetInput();
            }
        });
    }

    bindToggleTask(handler) {
        this.taskList.addEventListener('click', event => {
            if (event.target.tagName === 'LI') {
                const id = parseInt(event.target.id);
                handler(id);
            }
        });
    }

    bindDeleteTask(handler) {
        this.taskList.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }
}

export default TaskView;
