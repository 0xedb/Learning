const prog = require('electron').remote

document.getElementById('close').addEventListener('click', () => {
    prog.getCurrentWindow().close();
});