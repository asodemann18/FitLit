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
  }
}