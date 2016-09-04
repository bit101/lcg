var lcg = {
  seed: Date.now(),
  a: 1664525,
  c: 1013904223,
  m: Math.pow(2, 32),
  
  setSeed: function(seed) {
    this.seed = seed;
  },
  
  nextInt: function() {
    this.seed = (this.seed * this.a + this.c) % this.m;
    return this.seed;
  },
  
  nextFloat: function() {
    return this.nextInt() / this.m;
  },
  
  nextBool: function() {
    return this.nextFloat() < 0.5;
  },
  
  nextFloatRange: function(min, max) {
    return min + this.nextFloat() * (max - min);
  },
  
  nextIntRange: function(min, max) {
    return Math.floor(this.nextFloatRange(min, max));
  },
  
  nextString: function(length) {
    var str = "";
    for(var i = 0; i < length; i++) {
      var code = this.nextIntRange(97, 123);
      str += String.fromCharCode(code);
    }
    return str;
  },
  
  nextColor: function() {
    var c = this.nextIntRange(0, Math.pow(2, 24)).toString(16).toUpperCase();
    while(c.length < 6) {
      c = "0" + c;
    }
    return "#" + c;
  }
};
