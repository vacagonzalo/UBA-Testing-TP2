module.exports = class Lista {
    #elementos;

    constructor() {
        this.#elementos = [];
    }
    cantidad() {
        return this.#elementos.length;
    }

    getOrdenada() {
        let claves = [];
        if (this.cantidad() == 0) {
            return null;
        } else {
            for (let i = 0; i < this.#elementos.length; i++) {
                claves.push(this.#elementos[i][0]);
            }
            return claves.sort();
        }
    }

    getValor(key) {
        for (let i = 0; i < this.#elementos.length; i++) {
            if (this.#elementos[i][0] == key) {
                return this.#elementos[i][1];
            }
        }
        return null;
    }

    actualizar(clave, valor) {
        for (let i = 0; i < this.#elementos.length; i++) {
            if (this.#elementos[i][0] == clave) {
                this.#elementos[i][1] = valor;
                return true;
            }
        }
        return false;
    }

    borrar(key) {
        for (let i = 0; i < this.#elementos.length; i++) {
            if (this.#elementos[i][0] == key) {
                this.#elementos.splice(i);
                return true;
            }
        }
        return false;
    }

    agregar(nuevoElemento) {
        if (typeof (nuevoElemento[0]) == 'string' && !this.existeClave(nuevoElemento[0])) {
            this.#elementos.push(nuevoElemento);
            return true;
        }
        return false;
    }

    existeClave(clave) {
        for(let i = 0; i < this.#elementos.length; i++) {
            if(this.#elementos[i][0] == clave)
                return true;
        }
        return false;
    }
};