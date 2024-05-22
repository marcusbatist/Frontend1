import TaskModel from './models/TaskModel.js';
import TaskView from './views/TaskView.js';
import TaskController from './controllers/TaskController.js';

// Registro do Service Worker para tornar a aplicação um PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/javascript-node/Frontend1/projeto/sw.js')
        .then(registration => {
            console.log('Service Worker registrado com escopo:', registration.scope);
        })
        .catch(error => {
            console.error('Falha ao registrar o Service Worker:', error);
        });
}

// Inicialização do MVC
const model = new TaskModel();
const view = new TaskView();
const controller = new TaskController(model, view);
