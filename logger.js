'use strict'

const events = require('./events.js');

events.on('create', payload => doSomething('create', payload));
events.on('update', payload => doSomething('update', payload));
events.on('delete', payload => doSomething('delete', payload));

function doSomething(action, payload) {
    console.log(action.toString().toUpperCase(), payload)
}

