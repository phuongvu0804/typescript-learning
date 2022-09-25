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

// handleLogIn({
//     name: "Anna",
//     email: "anna@gmail.com",
// })


//Optional chaining
function getFirstAddress (contact: Contact) {
    return contact.addresses?.[0]
}

//Implement interface
class MyContact implements Contact {
    name: string;
    phoneNumber: string;
    email: string;
    company: string;

    constructor (name, phoneNumber, email, company) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.company = company;
    }
}

interface ContactApdater {
    getContact: () => Contact[];
}

class MyContactAdapter implements ContactApdater {
    getContact() {
        const contacts: Contact[] = [{
            name: "A",
            phoneNumber: "123", 
            email: "123@gmail.com",
            company: "123"
        }, {
            name: "B",
            phoneNumber: "456", 
            email: "456@gmail.com",
            company: "456"
        }]

        return contacts;
    }
}

const myAdapter = new MyContactAdapter()
class ContactApp {
    adapter: ContactApdater
    constructor (adapter: ContactApdater) {
        this.adapter = adapter;
    }

    render() {
        const contacts: Contact[] = this.adapter.getContact()

        console.table(contacts)
    }
}

const app = new ContactApp(myAdapter);
// app.render()


//Interface declaration merging
interface Employee {
    name: string;
    age: number;
    isNew: boolean;
}

interface Employee {
    isValidRetirement?: () => boolean;
}

// const employee1: Employee = {
//     name: "A",
//     age: 55,
//     isNew: false,
//     isValidRetirement: function () {
//         if (age >= 55) return true;
//         return false;
//     }
// }

//Type inference
function foo () {
    let i: string;

    if (Math.random() > 5) {
        i = "5"
    } else {
        i = "0"
    }

    return i.toUpperCase();
}

console.log(foo())

//Duck typing
const userList: User[] = [{
    name: "A",
    email: "user@example.com",
}, 
{
    name: "b",
    email: "use2@example.com",
}]

const userInfo = {
    name: "c",
    email: "c@gmail.com",
    gender: "femail"
}

userList.push(userInfo)

//Enums
enum GenderType { // String enum
    Male = "Male",
    Female = "Female",
    Other = "Other",
}

interface Employee {
    gender: GenderType
}

const employee2: Employee = {
    name: "Employee 1",
    age: 28,
    isNew: false,
    gender: GenderType.Male
}

enum HouseType { // Numeric enum
    Yksiö,
    Kaksio,
    Ravitalo,
    Omatalo
}

interface House {
    seller: string;
    saler: string;
    area: string;
    type: HouseType
}

const house1: House = {
    seller: "Tapio",
    saler: "Mari",
    area: "50m2",
    type: HouseType.Kaksio
}
