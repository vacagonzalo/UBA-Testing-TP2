const chai = require("chai");
const chaiFiles = require('chai-files');

chai.use(chaiFiles);

const assert = chai.assert;
const expect = chai.expect;
const file = chaiFiles.file;
const dir = chaiFiles.dir;

expect(dir('src')).to.exist;
// expect(file('lista.js')).to.exist;

const Lista = require("../src/lista");

describe("En una lista vacía:", () => {
    let lista = new Lista();

    it("La cantidad de elementos almacenados es 0", () => {
        assert.equal(lista.cantidad(), 0);
    });

    it("al recuperar la lista ordenada, se obtiene valor nulo", () => {
        assert.equal(lista.getOrdenada(), null);
    });

    it("al recuperar el valor de una clave, sin especificar la clave, se obtiene valor nulo", () => {
        assert.equal(lista.getValor(), null);
    });

    it("al recuperar el valor de una clave, indicando una clave, se obtiene valor nulo", () => {
        assert.equal(lista.getValor('clave'), null);
    });

    it("al intentar actualizar el valor de una clave, sin indicar la clave, se debe obtener FALSE", () => {
        assert.equal(lista.actualizar(), false);
    });

    it("al intentar actualizar el valor de una clave, indicando una clave, se debe obtener FALSE", () => {
        assert.equal(lista.actualizar('clave'), false);
    });

    it("al intentar borrar un elemento sin especificar su clave, obtengo false", () => {
        assert.equal(lista.borrar(), false);
    });

    it("al intentar borrar un elemento, indicando una clave, obtengo false", () => {
        assert.equal(lista.borrar('clave'), false);
    });

    it("al agregar un elemento válido se obtiene true", () => {
        assert.equal(lista.agregar(["clave", "valor"]), true);
    });

    it("al agregar un elemento válido, la cantidad es 1", () => {
        assert.equal(lista.cantidad(), 1);
    });

    it("al agregar un elemento con clave que no sea string, se obtiene false", () => {
        assert.equal(lista.agregar([0,"valor"]), false);
    });

    it("al agregar un elemento con clave que no sea string, la cantidad no cambia", () => {
        assert.equal(lista.cantidad(), 1);
    });
});

describe("En una lista con un único elemento:", () => {
    let lista = new Lista();
    let elemento = ['clave', 'valor'];
    let resultado = [];
    resultado.push(elemento[0]);
    lista.agregar(elemento);
    
    it("la cantidad de elementos es 1", () => {
        assert.equal(lista.cantidad(), 1);
    });

    it("al recuperar la lista ordenada, se obtiene el único par 'clave-valor'", () => {
        let evaluacion = lista.getOrdenada();
        assert.deepEqual(evaluacion, resultado);
    })

    it("al recuperar el valor de una clave inexistente, obtengo nulo", () => {
        let clave = 'inexistente';
        assert.equal(lista.getValor(clave), null);
    });

    it("al recuperar el valor de la clave correcta, obtengo el valor", () => {
        let clave = 'clave';
        assert.equal(lista.getValor(clave), 'valor');
    });

    it("al intentar  actualizar el valor de una clave, sin indicar la clave, se obtiene false", () => {
        assert.equal(lista.actualizar(), false);
    });

    it("al intentar  actualizar el valor de una clave, indicando una clave inexistente, se obtiene false", () => {
        let clave = 'inexistente';
        let valor = 1;
        assert.equal(lista.actualizar(clave, valor), false);
    });

    it("al intentar  actualizar el valor de una clave, indicando una clave correcta, se obtiene true", () => {
        let clave = 'clave';
        let valor = 1;
        assert.equal(lista.actualizar(clave, valor), true);
    });

    it("al intentar  actualizar el valor de una clave, indicando una clave correcta, se actualiza el valor", () => {
        let clave = 'clave';
        let valor = 1;
        assert.equal(lista.getValor(clave), valor);
    });

    it("al intentar borrar un elemento sin especificar su clave, obtengo false", () => {
        assert.equal(lista.borrar(), false);
    });

    it("al intentar borrar un elemento indicando una clave inexistente, obtengo false", () => {
        let clave = 'inexistente';
        assert.equal(lista.borrar(clave), false);
    });

    it("al intentar borrar un elemento indicando una clave correcta, obtengo true", () => {
        let clave = 'clave';
        assert.equal(lista.borrar(clave), true);
    });

    it("al intentar borrar un elemento indicando una clave correcta, la cantidad es 0", () => {
        assert.equal(lista.cantidad(), 0);
    });

    it("al intentar agregar un elemento repetido, obtengo false", () => {
        let elemento = ['clave', 'valor'];
        lista.agregar(elemento);
        assert.equal(lista.agregar(elemento), false);
    });
});

describe("En una lista desordenada con 4 elementos:", () => {
    let lista = new Lista();
    lista.agregar(['delta', 4]);
    lista.agregar(['charlie', 3]);
    lista.agregar(['bravo', 2]);
    lista.agregar(['alfa', 1]);

    it("la cantidad es 4", () => {
        assert.equal(lista.cantidad(), 4);
    });

    it("al recuperar la lista ordenada, obtengo una lista ordenada", () => {
        let ordenada = ['alfa', 'bravo', 'charlie', 'delta'];
        assert.deepEqual(lista.getOrdenada(), ordenada);
    });
});