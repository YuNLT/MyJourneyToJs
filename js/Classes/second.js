class Pizza{
    constructor(pizzaSize){
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCreust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

class SpecialityPiza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza  has 8 slices`);
    }
}

const mySpacility = new SpecialityPiza("medium");
mySpacility.slice();