function myModule() {
  this.hello = function() {
    console.log(1, 'hello!');
  };

  this.goodbye = function() {
    console.log(2, 'goodbye!');
  };
}

module.exports = myModule;