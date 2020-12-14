// Write your classes below this line
 class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.primeAcc = false;
        this.cart = new Cart();
    }
    changeUsername(newName) {
        this.username = newName;
        return `New username is set to ${this.username}`;
    }
    changePass(newPass) {
        this.password = newPass;
        return `Password change successful`;
    }
    getPrime(){
        if(this.primeAcc === false){
            this.primeAcc = !this.primeAcc;
            return `You now have a prime account!`;
        }
    }
}
class item {
    constructor(isFood,price,weight) {
        this.isFood = isFood
        this.price = price
        this.weight = weight
    }
}             






// Test your code below this line by instantiating instances and invoking methods
console.log("Welcome to Amazon!")
