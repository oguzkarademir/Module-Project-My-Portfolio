

export class App {

    constructor() {
        this.repoUrl = [],
        this.name,
        this.description,
        this.source,
        this.live
    }
    
    render(){
        const divEl = document.createElement('div');
        divEl.className = 'row';

        const h4El = document.createElement('h4');
        h4El.innerHTML = this.name;

        const pEl = document.createElement('p');
        pEl.innerHTML = this.description;

        const formEl = document.createElement('form');
        const buttonEl = document.createElement('button');
        const aEl = document.createElement('a');
        aEl.innerHTML = 'Source';
        aEl.href = this.source;
        buttonEl.appendChild(aEl);
        const buttonEl2 = document.createElement('button');
        const aEl2 = document.createElement('a');
        aEl2.innerHTML = 'Live'
        aEl2.href = this.live;
        buttonEl2.appendChild(aEl2);
        formEl.appendChild(buttonEl);
        formEl.appendChild(buttonEl2);

        divEl.appendChild(h4El);
        divEl.appendChild(pEl);
        divEl.appendChild(formEl);

        return document.getElementById('container').appendChild(divEl); 
    }

    fetchRepo = () => {
        fetch('https://api.github.com/users/oguzkarademir/starred')
          .then(response => response.json())
          .then(data => {
              console.log(data)
              for(let i = 0; i < data.length; i++){
                 this.repoUrl.push(data[i].url)
              }
          })
          .then(this.getProjects.bind(this))
    }

    capitalize (str) {
        str = str.replace(/-/gi, ' ').split(" ");

        for (let i = 0; i < str.length; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    }

    getProjects() {
        for (let i = 0; i < this.repoUrl.length; i++) {
           fetch(this.repoUrl[i])
             .then(response => response.json())
             .then(data => {
                 this.name =this.capitalize(data.name);
                 this.description = data.description;
                 this.source = data.html_url;
                 this.live = 'https://' + data.owner.login + '.github.io/' + data.name;  
             })
             .then(this.render.bind(this))
        }
    }
    
}