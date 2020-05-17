domUpdates = {
  displaySleepHoursForDay(date) {
    let sleepHoursForDay = sleep.getDailySleepHours(date)
    todaySleepHours.innerHTML = `You slept ${sleepHoursForDay} hours on ${date}`
  },
  
  displaySleepQualForDay(date) {
    let sleepQualForDay = sleep.getDailySleepQual(date)
    todaySleepQuality.innerHTML = `You rated your sleep quality a ${sleepQualForDay} on ${date}`;
  },

  displayAvgSleepHoursForUser() {
    let avgSleepHoursForUser = sleep.getAvgSleepHours()
    userAvgSleepHours.innerHTML = `You average number of hours slept is ${avgSleepHoursForUser}`
  },
  
  displayAvgSleepQualForUser() {
    let avgSleepQualForUser = sleep.getAvgSleepQual()
    userAvgSleepQuality.innerHTML = `Your average sleep quality is ${avgSleepQualForUser}`;
  },

  displayAvgSleepQualityForAll() {
    let avgSleepQualForAll = sleepRepo.calculateAverageSleep();
    allAvgSleepQuality.innerHTML = `On average, users have a sleep quality of ${avgSleepQualForAll}`;
  },

  displayLongestSleepers(date) {
    let longestSleepersOnDate = sleepRepo.getLongestSleepers(date);
    let ids = longestSleepersOnDate.map(sleep => sleep.userID);
    let sleepUserData = [];
    userData.forEach((user) => {
      ids.forEach(id => {
        if(user.id === id) {
          sleepUserData.push(user.name);
        }
      })
    })

    if (sleepUserData.length > 1) {
      longestSleepers.innerHTML = `${sleepUserData.join(', ')} slept the longest on ${date}`;
    } else {
      longestSleepers.innerHTML = `${sleepUserData[0]} slept the longest on ${date}`;
    }
  },

  displayHighestQualSleepers(date) {
    let qualSleepersOnDate = sleepRepo.getHighestQualitySleepers(date);
    let ids = qualSleepersOnDate.map(sleep => sleep.userID);
    let sleepUserData = [];
    userData.forEach((user) => {
      ids.forEach(id => {
        if(user.id === id) {
          sleepUserData.push(user.name);
        }
      })
    })

    if (sleepUserData.length > 1) {
      highestQualSleepers.innerHTML = `${sleepUserData.join(', ')} had the highest quality of sleep on ${date}`;
    } else {
      highestQualSleepers.innerHTML = `${sleepUserData[0]} had the highest quality of sleep on ${date}`;
    }
  },

  displayAllQualitySleepers(date) {
    let allQualSleepersWeek = sleepRepo.getAllQualitySleepers(date);
    let sleepUserData = []
    userData.forEach((user) => {
      allQualSleepersWeek.forEach(id => {
        if(user.id === id) {
          sleepUserData.push(user.name);
        }
      })
    })

    if (sleepUserData.length > 1) {
      allHighestQualSleepers.innerHTML = `${sleepUserData.join(', ')} averaged a sleep quality greater than 3 over a week`;
    } else {
      allHighestQualSleepers.innerHTML = `${sleepUserData[0]} averaged a sleep quality greater than 3 over a week`;
    }
  },

  displayHydrationForDay(date) {
    let hydrationForDay = hydration.getDailyWater(date)
    todayHydration.innerHTML = `You drank ${hydrationForDay} ounces on ${date}`
  }
}