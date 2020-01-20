
class mathematicalOperation {
    constructor(initialValue = 0) {
        this.value = initialValue
    }
    sum(value) {
        this.value += value;
        return this;
    }
    mult(value) {
        this.value *= value;
        return this;
    }
    result() {
        return this.value;
    }
}