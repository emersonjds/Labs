(function () {
    return 'quick-2';
})(); // IIFE

var name = `Emerson`;

function getName() {
    return this.name;
}

(function () {
    return 'new IIFE';
})();