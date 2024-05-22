import TaskModel from '../models/TaskModel.js';
import TaskView from '../views/TaskView.js';

// Classe TaskController para gerenciar a lógica de negócios
class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindToggleTask(this.handleToggleTask.bind(this));
        this.view.bindDeleteTask(this.handleDeleteTask.bind(this));

        this.model.bindTasksChanged(this.onTasksChanged.bind(this));

        this.onTasksChanged(this.model.tasks);
    }

    onTasksChanged(tasks) {
        this.view.displayTasks(tasks);
    }

    handleAddTask(title) {
        this.model.addTask(title);
    }

    handleToggleTask(id) {
        this.model.toggleTask(id);
    }

    handleDeleteTask(id) {
        this.model.deleteTask(id);
    }
}

export default TaskController;
