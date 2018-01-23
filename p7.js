// module.exports = function average (...args) {
//   let sum=0;
//   args.forEach(function (value){
//     sum+=value;
//   });
//   let avg=sum/args.length;
//   return avg;
// }

module.exports = (...args) => {
  if (args.length) {
    const sum = args.reduce((total, value) => total + value);
    return (sum / args.length).toPrecision(3).toNumber();
  }

  return '';
};
