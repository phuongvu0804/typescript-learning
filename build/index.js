import * as Mailer from "./mailer";
const number = 1;
let newVar;
function sum(a, b) {
    return a + b;
}
const multiply = (a, b) => a * b;
const sendEmail = async ({ email, subject, content }) => {
    const res = await Mailer.send(email, subject, content);
    return res;
};
function waitAndDo(callback) {
    setTimeout(() => callback("Oops!"), 1000);
}
class Dog {
    sayHi(name) {
        console.log("woof", name);
    }
}
