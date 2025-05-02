//Javascript classes
class Pizza{
    constructor(pizzaType, pizzaSize, pizzaCrust){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = pizzaCrust;
        this.toppings = [];
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    getTopping(){
        return this.toppings;
    }
    setTopping(topping){
        this.toppings.push(topping);
    }
    bake(){
        console.log(`baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("Papperoni","small","original");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setTopping("sausage");
myPizza.setTopping("olive");
console.log(myPizza.getTopping());
