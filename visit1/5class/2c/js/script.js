class PersonGreeter {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    greeter() {
        return `congrates ${this.fullName()}`;
    }
}
class Customer extends PersonGreeter {
    constructor(fname, lname, phone, membership) {
        super(fname, lname);
        this.phone = phone;
        this.membership = membership;
    }

    customer_greeter() {
        return `${this.greeter()},phone: ${this.phone} membership: ${this.membership}`;
    }
}
console.log(new Customer("Tony", "Montana", "09839838383", "Yes").customer_greeter());
let customer1 = new Customer("Zara", "Lerson", "09839838383", "No");
console.log(customer1.customer_greeter());