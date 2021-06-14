// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides;
        this.count = this.sides.length;
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        let sum = 0
        this.sides.forEach(element => {
            sum+= element
        });
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.count != 3){
            return false
        }
        else {
            return ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[1] + this.sides[2] > this.sides[0]))
        }
    }
}

class Square extends Polygon {
    get area() {
     
        if (this.count !== 4){
            return false;  
        } 
        return this.sides[0] * this.sides[0]
      }
      get isValid() {
        if (this.count !== 4){
            return false;  
        } 
        return ((this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3]))
      }

}