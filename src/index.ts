import * as Mailer from "./mailer";

const number: number = 1;

let newVar: string;

function sum (a: number, b:number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => a * b;

const sendEmail = async ({ email, subject, content} : {
    email: string;
    subject: string;
    content: string;
})  => {
    const res = await Mailer.send(email, subject, content);
    return res;
}

function waitAndDo (callback: (params: string) => void) {
    setTimeout(() => callback("Oops!"), 1000);
}

class Dog {
    sayHi(name: string) {
        console.log("woof", name)
    }
}

//Primitive types

const myName: string = "Chloe";
const age: number = 18;
const isPretty: boolean = true;
const someVar: undefined = undefined;
const anotherVar: null = null;
const bigNum: bigint = BigInt(10);

//Interface
interface Contact {
    name: string;
    phoneNumber: string;
    email: string;
    company: string;
}

const contacts: Contact[] = [];

const newContact: Contact = {
    name: "Chloe Vu",
    phoneNumber: "046555333",
    email: "abc@gmail.com",
    company: "IKEA"
}

contacts.push(newContact)

//Optional properties
interface User {
    name: string;
    email: string;
    isLogIn?: boolean;
}

const handleLogIn = (user: User) => {
    if (user.isLogIn !== undefined) {
       if(user.isLogIn) {
           console.log(`Welcome ${user.name}`);
       } else if (user.isLogIn === false) {
           console.log(`${user.name}, please log in`);
       }
   }
}

handleLogIn({
    name: "Anna",
    email: "anna@gmail.com",
})