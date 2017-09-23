function Cilindro(r, h) {
    this.raioBase = r;
    this.alturaBase = h;
    this.areaBase = function calculaAreaBase() {
        aBase = Math.round(Math.PI * Math.pow(this.raioBase, 2))
        return aBase;
    }

    this.areaLateral = function calculaAreaLateral() {
        aLateral = 2 * Math.PI * this.raioBase * this.alturaBase;
        return aLateral;
    }

    this.areaTotal = function calculaAreaTotal() {
        return 2 * aBase + aLateral;
    }

    this.volume = function calculaVolume() {
        return aBase * this.alturaBase;
    }
}

cilindroUm = new Cilindro(5, 2);
console.log(cilindroUm.alturaBase, cilindroUm.raioBase);

cilindroDois = new Cilindro(5, 10);
console.log(cilindroDois.areaBase());
console.log(cilindroDois.areaLateral());
console.log(cilindroDois.areaTotal());
console.log(cilindroDois.volume());