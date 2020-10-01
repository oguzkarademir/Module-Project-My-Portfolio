

export class App {

    constructor() {
        this.repoUrl = [],
        this.name,
        this.description
    }
    
    render(){
        const divEl = document.createElement('div');
        divEl.className = 'row';

        const h4El = document.createElement('h4');
        h4El.innerHTML = this.name;

        const pEl = document.createElement('p');
        pEl.innerHTML = this.description;

        const divEl2 = document.createElement('div');
        const aEl = document.createElement('a');
        aEl.innerHTML = 'Source';
        aEl.href = this.source;
        const aEl2 = document.createElement('a');
        aEl2.innerHTML = 'Live'
        aEl2.href = this.live;
        divEl2.appendChild(aEl);
        divEl2.appendChild(aEl2);

        divEl.appendChild(h4El);
        divEl.appendChild(pEl);
        divEl.appendChild(divEl2);

        return document.getElementsByClassName('container').appendChild(divEl); 
    }
}