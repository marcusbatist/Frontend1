// Classe TaskModel para gerenciar a lógica de dados das tarefas
class TaskModel {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    bindTasksChanged(callback) {
        this.onTasksChanged = callback;
    }

    _commit(tasks) {
        this.onTasksChanged(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addTask(title) {
        const task = { id: Date.now(), title, completed: false };
        this.tasks.push(task);
        this._commit(this.tasks);
    }

    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        task.completed = !task.completed;
        this._commit(this.tasks);
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this._commit(this.tasks);
    }
}

export default TaskModel;
