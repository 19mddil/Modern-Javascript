class CoffeeMachine {
    _waterAmount = 0;
    constructor(power) {
        this.power = power;
    }
    set waterAmount(value) {
        if (value < 0) {
            this._waterAmount = 0;
        }
        this._waterAmount = value;
    }
    get waterAmount() {
        return this._waterAmount;
    }
}
let CoffeeMachine = new CoffeeMachine(100);
CoffeeMachine.waterAmount = 200;