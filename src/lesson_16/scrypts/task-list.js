import { Ajax } from "./ajax";

export class TaskList {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.fetchList();
        this.renderForm();
    }

    renderList() {
        this.list = document.createElement('ul');
        this.options.forEach((option) => {
            this.list.appendChild(this.renderItem(option));
        });
        this.rootElement.appendChild(this.list);
    }

    renderItem(option) {
        const li = document.createElement('li');
        li.textContent = option.title;
        return li;
    }

    renderForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        
        input.placaholder = 'Enter task';

        form.appendChild(input);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendData(input.value);
            input.value = '';
        });

        this.rootElement.appendChild(form);
    }

    sendData(title) {
        const request = new Ajax('https://evening-dawn-11092.herokuapp.com/list');
        request.post({title}, (resp) => {
            this.options.push(resp);
            const li = this.renderItem(resp);
            this.list.appendChild(li);
        });
    }

    fetchList() {
        const request = new Ajax('https://evening-dawn-11092.herokuapp.com/list');
        request.get((result) => {
            this.options = result;
            this.renderList();
        });
    }
}