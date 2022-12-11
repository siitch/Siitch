import numbro from "numbro";

function forceAverageUnit(number) {
  let unit = "";
  if (number >= 1.0e+5 && number < 1.0e+6){
    unit = "thousand";
  }
  if (number >= 1.0e+6 && number < 1.0e+9){
    unit = "million";
  }
  if (number >= 1.0e+9 && number < 1.0e+12){
    unit = "billion";
  }
  if (number >= 1.0e+12){
    unit = "trillion";
  }
  return unit;
}

export const NumberFormatter = (number, digit) => {
  numbro.setDefaults({
    thousandSeparated: true,
    spaceSeparated: true,
    trimMantissa: true,
    mantissa: digit,
  });
  let forceAverage = forceAverageUnit(number);
  if (forceAverage !== "") {
    return numbro(number).format({
      mantissa: 1,
      average: true,
      forceAverage: forceAverage
    }).toUpperCase();
  } else {
  return numbro(number).format().toUpperCase();
  }
}

export const NumberWithThousandSeparation = (number) => {
  return numbro(number).format({
    thousandSeparated: true,
    trimMantissa: true,
    mantissa: 1,
  }).toUpperCase();
}

export const WaterContainerCounterNumberFormatter = (number, digit) => {
  return numbro(number).format({
    thousandSeparated: true,
    average: true,
    spaceSeparated: true,
    trimMantissa: true,
    mantissa: digit
  }).toUpperCase();
}

export const NumberWithTextLabel = (number) => {
  return numbro(number).format({
    thousandSeparated: true,
    trimMantissa: true,
    mantissa: 1,
  }).toUpperCase();
}
