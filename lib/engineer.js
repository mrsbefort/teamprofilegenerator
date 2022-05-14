const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    getGithub(){
        return this.github;
    }

    getRole(){ 
        return "Engineer" 
    }
}
//By putting module.export allows this code to be used somewhere else 
module.exports = Engineer;