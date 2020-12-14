class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.primeAcc = false;
        this.cart = new cart();
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
    constructor(name, isFood,price,weight) {
        this.name = name
        this.isFood = isFood
        this.price = price
        this.weight = weight
    }
    isFood() {
        return this.isFood
    }
    getPrice() {
        return this.price
    }
    getWeight() {
        return this.weight
    }
}

class cart {
    constructor (items = []) {
        this.items = items
    }
    addItem(item){
        this.items.push(item)
    }
}