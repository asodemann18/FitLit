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
      allHighestQualSleepers.innerHTML = `${sleepUserData.join(', ')} averaged a sleep quality greater than 3 over the week of ${date}`;
    } else {
      allHighestQualSleepers.innerHTML = `${sleepUserData[0]} averaged a sleep quality greater than 3 over the week of ${date}`;
    }
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
    mostActiveUser.innerHTML = `${user.name} was the most active on ${date} with ${activity[0].minutesActive} minutes active `
  },

  displayWeeklyAvgSteps(date) {
    let avg = activity.getWeeklyAvgSteps(date)
    weekAvgSteps.innerHTML = `You averaged ${avg} steps per day for the week starting on ${date}`
  },

  displayWeeklyAvgMinutesActive(date) {
    let avg = activity.getWeeklyAvgMinutesActive(date)
    weekAvgMinsActive.innerHTML = `You averaged ${avg} minutes of activity per day for the week starting on ${date}`
  },

  displayWeeklyAvgFlights(date) {
    let avg = activity.getWeeklyAvgFlights(date)
    weekAvgFlights.innerHTML = `You averaged ${avg} flights of stairs per day for the week starting on ${date}`
  },

  displayName() {
    let name = currentUser.getName();
    greeting.innerHTML = `Hi, ${name}`;
  },

  displayInfo() {
    let userName = currentUser.name;
    let userAddress = currentUser.address;
    let userEmail = currentUser.email
    let userStrideLength = currentUser.strideLength;
    let userDailyStepGoal = currentUser.dailyStepGoal;
    let allAvgStepGoal = usersRepo.getAvgStepGoal();
    name.innerHTML = `Name: ${userName}`;
    address.innerHTML = `Address: ${userAddress}`;
    email.innerHTML = `Email: ${userEmail}`;
    strideLength.innerHTML = `Stride Length: ${userStrideLength}`;
    dailyStepGoal.innerHTML = `Daily Step Goal: ${userDailyStepGoal}`;
    stepGoalComparison.innerHTML = `Average Step Goal: ${allAvgStepGoal}`;
    this.displayFriends();
  },

  displayFriends() {
    let userFriends = getFriends();
    let friendNames = userFriends.map(friend => friend.name);  
    if (friendNames.length > 1) {
      friends.innerHTML = `Friends: ${friendNames.join(', ')}`;
    } else {
      friends.innerHTML = `Friends: ${friendNames}`;
    }
  },

  displayStepChallenge(date) {
    let challengeUsers = calculateWeeklyStepChallenge(date)
    let rankedSteps = challengeUsers.map(user => Object.entries(user)).sort((a, b) => b[0][1] - a[0][1]);
    
    rankedSteps.forEach((step, i) => {
      stepChallenge.insertAdjacentHTML("beforeend", `<p>${i+1}. ${step[0][0]}: ${step[0][1]}</p>`);    
    });
  }
}