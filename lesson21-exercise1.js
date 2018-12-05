console.log('-------');
class Vector {
	constructor(x,y){
		this.x = x;
  		this.y = y;
	}
	plus(vector) {
	  return new Vector(this.x + vector.x, this.y + vector.y);
	}

	minus(vector) {
	  return new Vector(this.x - vector.x, this.y - vector.y);
	}

	get length() {
	    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
        
}



// Tests
let vector = new Vector(1, 2);
console.log(vector);
// → Vector{x: 1, y: 2}

// -> add to the vector
console.log( vector.plus( new Vector(2, 3) ) ); // → Vector{x: 3, y: 5}

// -> substract to the vector
console.log( vector.minus( new Vector(2, 3) ) );

// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5