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

  displayHydrationForDay(date) {
    let hydrationForDay = hydration.getDailyWater(date)
    todayHydration.innerHTML = `You drank ${hydrationForDay} ounces on ${date}`
  },

  displayMinutesActiveForDay(date) {
    let minutesActiveForDay = activity.getMinutesActive(date)
    todayMinsActive.innerHTML = `You were active for ${minutesActiveForDay} minutes on ${date}`
  },

  displayMilesWalkedForDay(date) {
    let milesWalked = activity.getMilesWalked(date)
    todayMilesWalked.innerHTML = `You walked ${milesWalked} miles on ${date}`
  },

  displayStepsTakenForDay(date) {
    let stepsTaken = activity.getStepsTaken(date)
    todayStepsTaken.innerHTML = `You took ${stepsTaken} steps on ${date}`
  },

  displayAllUsersAvgSteps(date) {
    let avg = activityRepo.calculateAvgSteps(date)
    allUsersAvgSteps.innerHTML = `Users averaged ${avg} steps on ${date}`
  },

  displayAllUsersAvgMinsActive(date) {
    let avg = activityRepo.calculateAvgMinActive(date)
    allUsersAvgMinsActive.innerHTML = `Users averaged ${avg} minutes active on ${date}`
  },

  displayAllUsersAvgFlights(date) {
    let avg = activityRepo.calculateAvgStairs(date)
    allUsersAvgFlights.innerHTML = `Users averaged ${avg} flights of stairs climbed on ${date}`
  },

  displayMostActiveUser(date) {
    let activity = activityRepo.calculateMaxMinActive(date)
    let user = userData.find(user => user.id === activity[0].userID)
    console.log(activity[0])
    mostActiveUser.innerHTML = `${user.name} was the most active on ${date} with ${activity[0].minutesActive} minutes active `
  }
}