// to verify exercise
// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(() => console.log(this.yelp));
//     }
// };
// foot.kick();


// to test
function tester() {
  const foot = {
    kick() {
      this.yelp = 'Ouch!';
      setImmediate(() => this.yelp);
    },
  };
  foot.kick();
}

module.exports = tester;
