class Circle{
    #radius=0;
    constructor(radius){
        this.radius=radius; //Call the setter
    }
    get area(){
        return this.#radius*this.#radius*3.14;        
    }

    set radius(value){
        if(typeof value === 'number' && value>0){
            this.#radius=value;
        }else{
            throw new Error('The radius must be +ve number');
        }
    }

    get radius(){
        return this.#radius;
    }
}

let c=null;
try{
    c=new Circle(15);
    c.radius=-5;
    console.log(c.radius);
    console.log(c.area);
}catch(e){
    console.log(e.message);
}
finally{
    console.log(c.area);
}