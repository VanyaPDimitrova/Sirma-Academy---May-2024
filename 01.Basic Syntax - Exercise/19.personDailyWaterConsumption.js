function personDailyWaterConsumption(totalWaterWeekly, peoples) {
  const dailyWater = totalWaterWeekly/7;
  const personDailyConsumption = dailyWater/peoples;

  return personDailyConsumption.toFixed(2);
};

console.log(personDailyWaterConsumption(2450, 7));
console.log(personDailyWaterConsumption(3150, 10));
console.log(personDailyWaterConsumption(980, 7));
