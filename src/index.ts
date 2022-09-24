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
interface Address {
    city: string;
    district?: string;
}
interface Contact {
    name: string;
    phoneNumber: string;
    email: string;
    company: string;
    addresses?: Address[]
}

const contacts: Contact[] = [];

const newContact: Contact = {
    name: "Chloe Vu",
    phoneNumber: "046555333",
    email: "abc@gmail.com",
    company: "IKEA"
}

const contact2: Contact = {
    name: "John",
    phoneNumber: "0123456789",
    email: "john@gmail.com",
    company: "HK",
    addresses: [ {
        city: "Espoo",
        district: "Viherlaakso"
    }]
}

const contact3: Contact = {
    name: "Mari",
    phoneNumber: "046555333",
    email: "mari@gmail.com",
    company: "HK",
    addresses: [{ city: "Vantaa"}, {city: "Lappeenranta"}]
}

contacts.push(newContact)

//Extending interfaces
interface Message {
    type: string,
    content: string
}

interface Button {
    onClick: () => void,
    label?: string
}

interface IconButton extends Button {
    iconButton: string
}

interface NotiMsg extends Message, IconButton{
    color: string,
    icon: string
}

const successMsg: NotiMsg = {
    color: "green",
    type: "success",
    icon: "<i class='success'/>",
    iconButton: "<i class='closing/>",
    content: "You have saved successfully!",
    onClick: () => alert(successMsg.content)
}

console.log(successMsg)

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


//Optional chaining
function getFirstAddress (contact: Contact) {
    return contact.addresses?.[0]
}

