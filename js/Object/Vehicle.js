const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vroom Vroom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); // 2
console.log(truck.wheels); // inheritance from vehicle
console.log(truck.engine()); // Vroom Vroom!
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Vroom Vroom! I'm a car!";
};
console.log(car.engine());
console.log(car.wheels); // 4

const tesla = Object.create(car);
console.log(tesla.wheels); // 4
tesla.engine = function() {
    return "Vroom Vroom! I'm a Tesla!";
}
console.log(tesla.engine()); // Vroom Vroom! I'm a car!