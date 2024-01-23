// TODO: Write code to define and export the Intern class.  
// HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // `super` is used in the constructor of the Intern class 
        // to call the constructor of its parent class
        super(name, id, email, school);
        this.school = school;  
        } 
        getRole() {
            return "Intern";
        }
        getSchool() {
            return this.school;
        }
    
}   
module.exports = Intern;