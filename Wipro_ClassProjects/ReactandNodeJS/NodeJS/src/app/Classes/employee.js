export class Employee
{
    constructor(empid,name)
    {
        this.empid=empid;
        this.name=name;
    }

    getInfo(){
        return `Employee Id: ${this.empid}, EmpName: ${this.name}`
    }
}

const emp=new Employee('E001','Alice');
console.log(emp.getInfo());