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
        this.cost = this.paymentType === 'credit_cart' ? 10 : 0; 
    }

    pay(amount) {
        if(this.paymentType === 'debit_cart') {
            console.log(`You pay $${amount} with your debit card ${this.brand}`);
        } else if (this.paymentType === 'credit_cart') {
            console.log(`You pay $${amount + amount / 100 * this.cost} with your credit card ${this.brand}`);
        } else if (this.paymentType === 'offline') {
            console.log(`You must pay $${amount} in ${this.brand}`);
        }
    }
}

function getPaymentMethods(data) {
    const paymentMethods = data.map(paymentMethodData => new PaymentMethod(paymentMethodData));
    return paymentMethods;
}

const paymentOptions = getPaymentMethods(serverResponse);

paymentOptions.forEach(po => {
    po.pay(100)
});
