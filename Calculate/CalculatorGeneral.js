// Picker values
import { ItemDisplayUnitDictionary } from "./ItemDisplayUnitDict";

export const quantities = [
  {label: '1/4', value: 1/4},
  {label: '1/2', value: 1/2},
  {label: '3/4', value: 3/4},
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
  {label: '9', value: 9},
  {label: '10', value: 10},
  {label: '11', value: 11},
  {label: '12', value: 12},
  {label: '13', value: 13},
  {label: '14', value: 14},
  {label: '15', value: 15},
  {label: '16', value: 16},
  {label: '17', value: 17},
  {label: '18', value: 18},
  {label: '19', value: 19},
  {label: '20', value: 20},
  {label: '21', value: 21},
  {label: '22', value: 22},
  {label: '23', value: 23},
  {label: '24', value: 24},
  {label: '25', value: 25},
  {label: '26', value: 26},
  {label: '27', value: 27},
  {label: '28', value: 28},
  {label: '29', value: 29},
  {label: '30', value: 30},
  {label: '40', value: 40},
  {label: '50', value: 50},
  {label: '60', value: 60},
  {label: '70', value: 70},
  {label: '80', value: 80},
  {label: '90', value: 90},
  {label: '100', value: 100},
  {label: '200', value: 200},
  {label: '300', value: 300},
  {label: '400', value: 400},
  {label: '500', value: 500},
  {label: '600', value: 600},
  {label: '700', value: 700},
  {label: '800', value: 800},
  {label: '900', value: 900},
  {label: '1000', value: 1000},
  {label: '2000', value: 2000},
  {label: '3000', value: 3000},
  {label: '4000', value: 4000},
  {label: '5000', value: 5000},
];

export const frequencies = [
  { label: "single use", value: "single_use" },
  { label: "a day", value: "per_day" },
  { label: "a week", value: "per_week" },
  { label: "a month", value: "per_month" },
  { label: "a year", value: "per_year" },
];

export const impactUnits = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

export function getItemDisplayMetric(itemName, unit) {
  let localDisplayUnit;
  if (unit === 'G') {
    localDisplayUnit = 'Display Unit Imperial';
  } else {
    localDisplayUnit = 'Display Unit Metric';
  }
  let targetTextRaw = ItemDisplayUnitDictionary[itemName][localDisplayUnit];
  let targetText = '';
  if (targetTextRaw !== '') {
    targetText = targetTextRaw.slice(2);
  }
  return targetText;
}
