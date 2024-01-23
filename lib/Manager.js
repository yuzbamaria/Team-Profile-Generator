// TODO: Write code to define and export the Manager class. 
// HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // `super` is used in the constructor of the Manager class 
        // to call the constructor of its parent class
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;  
        } 
        getRole() {
            return "Manager";
        }
        getOfficeNumber() {
            return this.officeNumber;
        }
    
}   
module.exports = Manager;