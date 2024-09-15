import { EventEmitter } from 'events';
import AppDispatcher from './dispatcher';


let user={
    name:'user1',
    age:25
};

const userstore=Object.assign({},EventEmitter.prototype,{getUser(){return user},

emitChange(){
    this.emit('change');
},

addChangeListener(callback){
    this.on('change',callback)
},

removeChangeListener(callback){
    this.removeListener('change',callback)
}

});

AppDispatcher.register((action)=>{
    switch(action.type){
        case 'UPDATE_USER':
            user=action.payload;            
            //userstore.emit('change');
            userstore.emitChange();
            break;
        default:
    }
})

export default userstore;