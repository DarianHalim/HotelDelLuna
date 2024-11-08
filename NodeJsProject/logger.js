const EventEmitter = require('events');
// const emitter = new EventEmmiter(); NOT NEEDED REMOVE

var url = 'http://mylogger.io/log';

// no need function keyword when inside of class it turns to method
class Logger extends EventEmitter {
    log(message) {
        //send a http request
        console.log(message);
        //raise event replace emitter with 'this'
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;

