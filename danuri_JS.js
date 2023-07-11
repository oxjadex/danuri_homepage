let today = new Date();   

let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초
let milliseconds = today.getMilliseconds(); // 밀리초

document.write(hours + ':' + minutes + ':' + seconds + ':' + milliseconds);