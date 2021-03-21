module.exports = {
    Primo: function(numero){
            for (var i = 2; i < numero; i++) {          
              if (numero % i === 0) {
                return false;
              }          
            }          
            return true;
    },    
    par: function(numero){
        if (numero%2==0) {
            return true;

        } else {
            return false
        }
    },
    modular: function(n1, n2){
      return n1 % n2;
    },
    potencia: function(n1, n2) {
        return n1**n2;
    },
    calcularporcentaje: function(numero, porcentaje){
        return (numero)*(porcentaje/100);
    }
  
  }
