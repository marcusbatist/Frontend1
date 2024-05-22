// Classe TaskComponent para definir um web component personalizado para tarefas
class TaskComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .task {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    background: #fff;
                    margin-bottom: 5px;
                    border-radius: 5px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .completed {
                    text-decoration: line-through;
                    color: gray;
                }
                button {
                    padding: 5px 10px;
                    border: none;
                    background: red;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <div class="task">
                <span></span>
                <button>Delete</button>
            </div>
        `;
    }

    set task(task) {
        this.shadowRoot.querySelector('span').textContent = task.title;
        this.shadowRoot.querySelector('.task').classList.toggle('completed', task.completed);
    }
}

customElements.define('task-item', TaskComponent);
