function add(a, b){
    let sum = a + b;
    return sum;
}
function sub(a, b){
    let subs = a - b;
    return subs;
}
function multiply(a, b){
    let mul = a * b;
    return mul;
}
function divide(a, b){
    let divd = a / b;
    divd = divd.toFixed(2);
    return divd;
}


export default add;
export {sub, multiply, divide};