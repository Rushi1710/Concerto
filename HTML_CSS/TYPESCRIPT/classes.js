var Student = /** @class */ (function () {
    function Student(name, email) {
        if (email === void 0) { email = 'test@gmail.com'; }
        this.name = name;
        this.email = email;
        this.name = name;
        this.email = email;
    }
    Student.prototype.display = function () {
        console.log(this.name, this.email);
    };
    return Student;
}());
var s1 = new Student('damodar', '24355');
var s2 = new Student('damodar');
s1.display();
s2.display();
