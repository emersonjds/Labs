//Call to global object window

window.alert('Hello');
window.confirm('Do you rigth this !? ');
window.prompt('Write your name');

this.alert('Test');
this.confirm('Confirm with this');
this.prompt('Write your mother name');


a = 50;
console.log(this.a);

oneFunction = () => {
    var b = 30;
}

console.log(this.b)
