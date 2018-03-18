function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath Starting a new game ...';
}
// document.getElementById('startGame').addEventListener('click', startGame);
document.querySelector('startGame').addEventListener('click', function () {
    console.log('clicado');
});
