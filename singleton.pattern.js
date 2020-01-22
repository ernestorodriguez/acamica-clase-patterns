var Singleton = (function() {
    var message = 'HOLA'
    var instance;
    function Init() {
        instance = instance || this
        return instance;
    }
    Init.prototype.publicFunction = function() {
        return 'public function ' + privateMethod();
    }

    privateMethod = function() {
        return message
    }
    return Init;
})();


var SingletonClass = (function(){
    const message = 'Adios'
    const privateMethod = function() {
        return message;
    }
    class SingletonClass {
        constructor() {
            SingletonClass.instace =  SingletonClass.instace || this;
            return SingletonClass.instace;
        }
        publicFunction() {
            return 'public function ' + privateMethod();
        }
    }
    return SingletonClass;
})();
