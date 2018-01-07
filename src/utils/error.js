function MyError( message ) {
    var instance = new Error( message );
    instance.name = 'MyError';
    Object.setPrototypeOf( instance, Object.getPrototypeOf( this ) );
    return instance;
}
 
MyError.prototype = Object.create( Error.prototype, {
    constructor: {
        value: MyError,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
 
if ( Object.setPrototypeOf ) {
    Object.setPrototypeOf( MyError, Error );
} else {
    MyError.__proto__ = Error;
}
 
export default MyError;