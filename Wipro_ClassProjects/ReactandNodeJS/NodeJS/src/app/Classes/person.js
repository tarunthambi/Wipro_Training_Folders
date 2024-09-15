class Person{
    ssn
    firstname
    lastname
    birthdate

    constructor(ssn,fn,ln,bd){
        this.ssn=ssn;
        this.firstname=fn;
        this.lastname=ln;
        this.birthdate=bd;
    }

    getPersonDetails(){
        return `${this.ssn} ${this.firstname} ${this.lastname} ${this.birthdate}`;
    }
}
let person1=new Person("S1001","John","De",new Date(1991,12,25));
console.log(person1.getPersonDetails());

let person2=new Person("S1002","John",undefined,new Date(1991,12,25));
console.log(person2.getPersonDetails());

//Derived Class
class Employee extends Person
{
    #jobtitle //private
    static headcount=0

    constructor(ssn,fn,ln,bd,jt){
        super(ssn,fn,ln,bd); //base class initialization
        this.#jobtitle=jt;
        Employee.headcount++;
    }

    static getHeadCount(){
        return this.headcount;
    }

    getEmployeeDetails=()=>{
        return super.getPersonDetails()+" "+`${this.#jobtitle}`;
    }
}

let emp1=new Employee("E001","Smith","Taylor",new Date(2020,10,12),"Executive");
let emp2=new Employee("E002","Jane","Doe",new Date(2020,10,12),"Developer");
let emp3=new Employee("E003","Jany","Taylor",new Date(2020,10,12),"Tester");

console.log(emp1.getEmployeeDetails());
console.log(emp2.getEmployeeDetails());
console.log(emp3.getEmployeeDetails());

console.log("HeadCount is: "+Employee.getHeadCount());

let p1=Object;
try
{
if(p1 instanceof Person)
{
    console.log("Instance of Person")
}
else
    throw new Error("Not an instance of person");
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("Done !!!");
}

