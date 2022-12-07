import numbro from "numbro";

function forceAverageUnit(number) {
  let unit = "";
  if (number > 1.0e+5 - 1 && number <= 1.0e+8 - 1){
    unit = "thousand";
  }
  if (number > 1.0e+8 - 1 && number <= 1.0e+11 - 1){
    unit = "million";
  }
  if (number > 1.0e+11 - 1 && number <= 1.0e+14 - 1){
    unit = "billion";
  }
  if (number > 1.0e+14 - 1 && number <= 1.0e+17 - 1){
    unit = "trillion";
  }
  return unit;
}

export const NumberFormatter = (number, digit) => {
  numbro.setDefaults({
    thousandSeparated: true,
    spaceSeparated: true,
    trimMantissa: true,
    mantissa: digit
  });
  let forceAverage = forceAverageUnit(number);
  if (forceAverage !== "") {
    return numbro(number).format({
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
    mantissa: 2,
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
    mantissa: 2,
  }).toUpperCase();
}
