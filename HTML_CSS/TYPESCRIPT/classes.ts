export default class Student {
    constructor (public name:string,public email:string ='test@gmail.com')
    {
        this.name = name;
        this.email = email;
    }
    display()
    {
        console.log(this.name,this.email)
    }
}
// let s1 = new Student ('damodar','24355')
// let s2 = new Student ('damodar')
// s1.display();
// s2.display();