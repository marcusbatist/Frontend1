window.onload = () => {
    new Item(console.log);
};

class Item {
    #front;
    #touchX = 0;
    #maxX = 84;
    #currentX = 0;
    #callback;

    constructor(callback) {
        this.#callback = callback;

        this.view = document.querySelector(".button");
        this.#front = this.view.querySelector(".front");
        
        this.view.onmousedown = this.#mouseDown.bind(this);
        this.view.onclick = () => {
            if (this.#currentX === 0) this.#callback("clicked");
        };
    }

    #mouseDown(event) {
        this.#touchX = event.x;
        document.addEventListener("mouseup", this.#mouseUp.bind(this));
        document.addEventListener("mousemove", this.#mouseMove.bind(this));
        this.#front.style.transition = 'none';
        this.#currentX = 0;
    }

    #mouseUp = () => {
        document.removeEventListener("mouseup", this.#mouseUp);
        document.removeEventListener("mousemove", this.#mouseMove);

        if (this.#currentX === this.#maxX) this.#callback("delete!");

        this.#front.style.transition = 'transform .15s ease-in-out';
        this.#front.style.transform = 'translateX(0)';

        this.#touchX = 0;
    }

    #mouseMove = (event) => {
        this.#currentX = Math.min(Math.max(this.#touchX - event.x, 0), this.#maxX);
        this.#front.style.transform = `translateX(-${this.#currentX}px)`;
    }
}


/*
window.onload = () => {
    new Item((message) => {
        console.log(message)
    });
}

class Item {

    view;
    #front;
    #touchX;
    #maxX = 84;
    #currentX;
    #callback;
    constructor(cb) {
        this.#callback = cb;

        this.view = document.querySelector(".button");
        this.#front = this.view.querySelector(".front");
        
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.view.onmousedown = (ev) => this.#mouseDown(ev);
        this.view.onclick = () => {
            if(this.#currentX === 0) this.#callback("clicked");
        }
    }

    #mouseDown(ev) {

        this.#touchX = ev.x
        document.addEventListener("mouseup", this.mouseUp);
        document.addEventListener("mousemove", this.mouseMove);
        this.#front.style.transition = 'none';
        this.#currentX = 0;
    }

    mouseUp() {
        document.removeEventListener("mouseup", this.mouseUp);
        document.removeEventListener("mousemove", this.mouseMove);

        if(this.#currentX === this.#maxX) this.#callback("delete!");

        this.#front.style.transition = 'transform .15s ease-in-out';
        this.#front.style.transform = 'translateX(0)';

        this.#touchX = 0;
    }
    mouseMove(ev) {
        this.#currentX = this.#touchX - ev.x;
        if(this.#currentX < 0) this.#currentX = 0;
        if(this.#currentX > this.#maxX) this.#currentX = this.#maxX;

        this.#front.style.transform = `translateX(-${this.#currentX}px)`;
    }
}
*/