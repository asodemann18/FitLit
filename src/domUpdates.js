domUpdates = {
  displaySleepHoursForDay(date) {
    let sleepHoursForDay = sleep.getDailySleepHours(date)
    todaySleepHours.innerHTML = `You slept ${sleepHoursForDay} hours on ${date}`
  },
  
  displaySleepQualForDay(date) {
    let sleepQualForDay = sleep.getDailySleepQual(date)
    todaySleepQuality.innerHTML = `You rated your sleep quality a ${sleepQualForDay} on ${date}`;
  },
  
  displayAvgSleepHoursForUser(date) {
    let avgSleepHoursForUser = sleep.getAvgSleepHours(date)
    userAvgSleepHours.innerHTML = `You slept ${avgSleepHoursForUser} hours on ${date}`
  },
  
  displayAvgSleepQualForUser(date) {
    let avgSleepQualForUser = sleep.getAvgSleepQual(date)
    userAvgSleepQuality.innerHTML = `You rated your sleep quality a ${avgSleepQualForUser} on ${date}`;
  },

  displayAvgSleepQualityForAll() {
    let avgSleepQualForAll = sleepRepo.calculateAverageSleep();
    allAvgSleepQuality.innerHTML = `On average users have a sleep quality of ${avgSleepQualForAll}`;
  },

  displayHydrationForDay(date) {
    let hydrationForDay = hydration.getDailyWater(date)
    todayHydration.innerHTML = `You drank ${hydrationForDay} ounces on ${date}`
  }
}