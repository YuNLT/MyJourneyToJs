//Javascript classes
class Pizza{
    constructor(pizzaType, pizzaSize, pizzaCrust){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = pizzaCrust;
    }
    bake(){
        console.log(`baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("Papperoni","small","original");
myPizza.bake();
