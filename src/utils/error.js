// 自身错误构造函数
function _LxsError( message ) {
    var instance = new Error( message );
    instance.name = '_Lxs_Error';
    Object.setPrototypeOf( instance, Object.getPrototypeOf( this ) );
    return instance;
}
 
// 原型继承于Error的原型
_LxsError.prototype = Object.create( Error.prototype, {
    constructor: {
        value: _LxsError,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
 
if ( Object.setPrototypeOf ) {
    Object.setPrototypeOf( _LxsError, Error );
} else {
    _LxsError.__proto__ = Error;
}
 
export default _LxsError;