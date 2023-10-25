const discount = (totalamount) =>
  totalamount ? totalamount * 0.1 : totalamount * 0.05;

console.log(discount(200));
