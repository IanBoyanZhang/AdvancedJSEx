(function(global){

  function C() {
  	console.log("OOPS!");
  }

  function E(f) {
  	console.log("E");
    f();
    var f = F;
  }

  var A = function() {
  	console.log("A");
  	B();
  };

  var C;

  function G() {
  	console.log("G");
  	H();

    function H() {
      console.log("H");
      I();
    }
  }

  var D = d;

  function d() {
  	console.log("D");
    // pass function F in 
  	E(F);
  }

  function I() {
  	console.log("I");
  	J();
  	J();
  }

  B = function() {
  	console.log("B");
  	C();
  };

  var F = function() {
  	console.log("F");
  	G();
  };

  var rest = "KLMNOPQRSTUVWXYZ".split(""); fns = {};
  for (var i=0; i<rest.length; i++) {
  	(function(i){
  		// define the current function
      fns[rest[i]] = function() {
        console.log(rest[i]);
  			if (i < (rest.length-1)) {
  				// TODO: call the next function
          fns[rest[i+1]]();
  			}
  		};
  	})(i);
  }

  // How J Hoisting works?
  var J = function() {
    debugger;
  	J = function() {
  		console.log("J");
  		// K();
      fns.K();
  	};
  };

  // C = function() {
  // 	console.log("C");
  // 	D();
  // };

  function C() {
   console.log("C");
   D();    
  }

  return A;
})(window)();