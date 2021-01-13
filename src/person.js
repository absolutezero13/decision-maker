const isAdult = function (age) {
  return age >= 18 ? true : false;
};
const canDrink = function (age) {
  return age >= 21 ? true : false;
};
const isSenior = (age) => age > 64;
export { isAdult, canDrink, isSenior as default };
