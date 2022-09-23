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