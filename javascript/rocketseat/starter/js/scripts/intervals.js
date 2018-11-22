
function show() {
    console.log('test')
}
// pass function by reference for callback use
setInterval(show, 1000);

// execute only once
setTimeout(show, 3000)