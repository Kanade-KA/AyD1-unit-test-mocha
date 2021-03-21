const assert = require('chai').assert;
const app = require('../201700565');

// Results
describe('App', function(){

  describe('Primo()', function(){
    it('Debería de mostrar true si es primo', function(){
        let resultado = app.Primo(23);
        assert.isTrue(resultado, true);
      });
      
  });
  
  describe('par()', function(){
    it('Debería de mostrar true si es par', function(){
        let resultado = app.par(8);
        assert.isTrue(resultado, true);
      });
      
  });


  describe('modular()', function(){
    it('Debe de mostrar un numero mayor a cero', function(){
        let resultado = app.modular(25,4);
        assert.isAbove(resultado, 0);
    });
  });

  describe('potencia()', function(){
    it('potencia deberia devolver un numero mayor que 30', function(){
        let result = app.potencia(2,5)
        assert.isAbove(result, "30");
    });

  });

  describe('calcularporcentaje', function(){
    it('calcularporcentaje debe devolver 25', function(){
        let resultado = app.calcularporcentaje(100, 25)
        assert.isNumber(resultado, "12");
    });

  });


});
