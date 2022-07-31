{
    let user = {
        firstName: "John",
        lastName: "Wick",
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            [this.firstName, this.lastName] = value.split(" ");
        }
    }
    console.log(user.fullName);
    user.fullName = "Thomas Shelby";
    console.log(user.fullName);
}
{
    let user = {
        get name() {
            return this._name;
        },
        set name(value) {
            if (value.length < 4) {
                return;
            }
            this._name = value;
        }
    }
    user.name = "Thmas";
    console.log(user.name);
    console.log(user._name);
    /**a widely known agreement that properties starting with an underscore "_" are internal
and should not be touched from outside the object. */
}