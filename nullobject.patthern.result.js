// NULL OBJECT PATTERN
// without null patther
class Product {
    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
}

class NoDiscount {
    getUpdatedPrice(item) {
        return item.price;
    }
    print() {
        console.log(`You dont have a discount :(`)
    }
}

class Discount {
    constructor (value) {
        this.value = value;
    }
    getUpdatedPrice(product) {
        let value = product.price;
        if (this.appliesTo(product)) {
            console.log('applied discount')
            value = product.price - this.value;
        } else {
            console.log('discount did not apply')
        }
        return value;
    }
    print() {
        console.log(`You have a discount of ${this.value}%`)
    }
    appliesTo(product) {
        return product.type === 'general';
    }
}

class User {
    constructor(name, discountCode) {
        this.name = name;
        this.discountCode = discountCode;
    }
}

const discounts = {
    aaaa: new Discount(10),
    bbbb: new Discount(30),
}

function getDiscount(code) {
    return discounts[code] || new NoDiscount();
}

function processPurchases(user, product, discount) {
    let valueToPay = discount.getUpdatedPrice(product);
    console.log(`${user.name}: buy ${product.name} and pay $${valueToPay}`)
}

function notifyDiscount(discount) {
    discount.print();
}

function buying(user, product) {
    console.log('================ BUYING ================');
    const discount = getDiscount(user.discountCode);
    notifyDiscount(discount);
    processPurchases(user, product, discount)
    console.log('================ END BUYING ================');

}

buying(new User('Juan', 'aaaa'), new Product("pijama", 100, 'general'));
buying(new User('Ana', 'aaaa'), new Product("wine", 100, 'licor'));
buying(new User('Ernest', 'xxxx'), new Product("pijama", 100, 'general'));
buying(new User('Belen'), new Product("pijama", 100, 'general'));




