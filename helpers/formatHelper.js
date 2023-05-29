export const numberFormat = (number, separator = ",", digitLength = 3) => {
  if (number === undefined) {
    return "";
  }
  let num;
  if (typeof number === "number") {
    num = number.toString();
    num = num.replace(/[^\d]/g, "");

    if (num.length > digitLength) {
      // console
      let expresion = "\\B(?=(?:\\d{" + digitLength + "})+(?!\\d))";

      expresion = new RegExp(expresion, "g");
      // console.log('exp',expresion);
      num = num.replace(expresion, separator);
    }
  } else {
    num = number;
  }

  //convert number to persian
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  num = num.replace(/\d/g, (x) => farsiDigits[x]);
  return num;
};
