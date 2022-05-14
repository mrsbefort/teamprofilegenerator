const Employee = require('./employee');
//This class is an extension of Employee aka the Parent class, sub classes (child classes)
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //super is calling the parent constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole(){ 
        return "Manager" 
    }
}
module.exports = Manager;