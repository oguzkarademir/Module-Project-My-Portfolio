import { App } from '../app.js';

export const getProjectHandler = (event) => {
    
    debugger;
    const userTarget = event.target;
    if (userTarget.innerHTML === 'Show') {
        userTarget.style.display = 'none'
    }
    const newApp = new App();

    newApp.fetchRepo()
}