var rsapi = require('./');

var api = new rsapi();

api.rs().player('zezima').profile().then(console.log).catch(handle);

function handle(err) {
  console.error(err);
}
