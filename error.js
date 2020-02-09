

const events = require('./events.js');

events.on('err', payload => {
  console.log('there is something wrong');
});