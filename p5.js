
// to verify
// let userArray = process.argv.slice(2);
// let obj ={};
// [ ,obj.username ,obj.email] =userArray;
// console.log(obj);

// to test
function tester(...args) {
  const userArray = args[0];
  const obj = {};
  [, obj.username, obj.email] = userArray;
  return (obj);
}
module.exports = tester;
