export class Ajax {
    constructor(url) {
        this.url = url;
    }

    get(onSuccess) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                console.log(xhr.response);
                onSuccess(JSON.parse(xhr.response));
                xhr.onreadystatechange = undefined;
            }
        };
    }

    post(body, onSuccess) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
              onSuccess(JSON.parse(xhr.response));
              xhr.onreadystatechange = undefined;
            }
        });
    }
}