var total = 0;
var mathematicalOperation = {
    sum(value) {
        total += value;
        return this;
    },
    mult(value) {
        total *= value;
    }
}