const serverResponse = [
    {
        id: '123456',
        paymentType: 'credit_cart',
        brand: 'visa',
    },
    {
        id: '245678',
        paymentType: 'offline',
        brand: 'santander',
    },
    {
        id: '245678',
        paymentType: 'debit_cart',
        brand: 'santander',
    },
];

class PaymentMethod {
    constructor({id,paymentType, brand }) {
        this.id = id;
        this.paymentType = paymentType;
        this.brand = brand;
    }

    pay(amount) {
        console.log(`You must pay $${amount} in generic`);
    }
    
    static factory(data) {
        if(data.paymentType === 'debit_cart') {
            return new DebitCart(data);
        } else if (data.paymentType === 'credit_cart') {
            return new CreditCart(data);
        } else if (data.paymentType === 'offline') {
            return new Offline(data);
        }
    }
}

class CreditCart extends PaymentMethod{
    constructor(data) {
        super(data)
        this.cost = 10; 
    }
    pay(amount) {
        console.log(`You pay $${amount + amount / 100 * this.cost} with your credit card ${this.brand}`);
    }
}

class DebitCart extends PaymentMethod{
    constructor(data) {
        super(data)
    }
    pay(amount) {
        console.log(`You pay $${amount} with your debit card ${this.brand}`);
    }
}

class Offline extends PaymentMethod{
    constructor(data) {
        super(data)
    }
    pay(amount) {
        console.log(`You must pay $${amount} in ${this.brand}`);
    }
}


function getPaymentMethods(data) {
    const paymentMethods = data.map(paymentMethodData => PaymentMethod.factory(paymentMethodData));
    return paymentMethods;
}

const paymentOptions = getPaymentMethods(serverResponse);

paymentOptions.forEach(po => {
    po.pay(100)
});
