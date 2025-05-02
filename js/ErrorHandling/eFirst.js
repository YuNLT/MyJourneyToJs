//JavaScript error and erro handling
//reference error
//syntax error
//type errora

const makerError = () => {
    try{
        throw new customError("This is a cusom error!");
    }catch(err){
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack); //warn, error, table, err.message, err.stack
        
    }
}
makerError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}