class Employee {
    //red text inside parenthesis are values
    constructor(name, id, email){
this.name = name;
this.id = id;
this.email = email;
//you could also hard code a value, for ex. this.laptop=1; Or You could say constructor (name, id, email, laptop=1)
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
   
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;