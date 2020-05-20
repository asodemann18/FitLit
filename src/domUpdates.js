domUpdates = {
  displaySleepHoursForDay(date) {
    let sleepHoursForDay = sleep.getDailySleepHours(date)
    todaySleepHours.innerHTML = `
    <p>Hours slept:</p>
    <p class="stat">${sleepHoursForDay}</p>`
  },
  
  displaySleepQualForDay(date) {
    let sleepQualForDay = sleep.getDailySleepQual(date)
    todaySleepQuality.innerHTML = `
    <p>Sleep quality:</p>
    <p class="stat">${sleepQualForDay} / 5</p>`
  },

  displayAvgSleepHoursForUser() {
    let avgSleepHoursForUser = sleep.getAvgSleepHours()
    userAvgSleepHours.innerHTML = `
    <p>Average hours slept:</p>
    <p class="stat">${avgSleepHoursForUser}</p>`
  },
  
  // displayAvgSleepQualForUser() {
  //   let avgSleepQualForUser = sleep.getAvgSleepQual()
  //   userAvgSleepQuality.innerHTML = `Your average sleep quality is ${avgSleepQualForUser}`;
  // },

  // displayAvgSleepQualityForAll() {
  //   let avgSleepQualForAll = sleepRepo.calculateAverageSleep();
  //   allAvgSleepQuality.innerHTML = `On average, users have a sleep quality of ${avgSleepQualForAll}`;
  // },

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
      longestSleepers.innerHTML = `<h4>Longest Sleepers:</h4> ${sleepUserData.join(', ')}`;
    } else {
      longestSleepers.innerHTML = `<h4>Longest Sleeper:</h4>${sleepUserData[0]}`;
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
      highestQualSleepers.innerHTML = `<h4>Best Sleepers:</h4> ${sleepUserData.join(', ')}`;
    } else {
      highestQualSleepers.innerHTML = `<h4>Best Sleeper:</h4> ${sleepUserData[0]}`;
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
    sleepUserData.forEach(user => {
      allHighestQualSleepers.insertAdjacentHTML('beforeend', `<p>${user}</p>`)
    })
  },

  displayHydrationForDay(date) {
    let hydrationForDay = hydration.getDailyWater(date)
    todayHydration.innerHTML = `
    <p>Water drank:</p>
    <p class="stat">${hydrationForDay}oz</p>`
  },

  // displayMinutesActiveForDay(date) {
  //   let minutesActiveForDay = activity.getMinutesActive(date)
  //   todayMinsActive.innerHTML = `You were active for ${minutesActiveForDay} minutes on ${date}`
  // },

  displayMilesWalkedForDay(date) {
    let milesWalked = activity.getMilesWalked(date)
    todayMilesWalked.innerHTML = `
    <p>Miles walked:</p>
    <p class="stat">${milesWalked}</p>`
  },

  // displayStepsTakenForDay(date) {
  //   let stepsTaken = activity.getStepsTaken(date)
  //   todayStepsTaken.innerHTML = `You took ${stepsTaken} steps on ${date}`
  // },

  // displayStairsClimbedForDay(date) {
  // let stairsClimbed = activity.getStairsClimbed(date)
  // todayStairsClimbed.innerHTML = `You climbed ${stairsClimbed} flights of stairs on ${date}`;
  // },

  // displayAllUsersAvgSteps(date) {
  //   let avg = activityRepo.calculateAvgSteps(date)
  //   allUsersAvgSteps.innerHTML = `Users averaged ${avg} steps on ${date}`
  // },

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
    mostActiveUser.innerHTML = `<h4>Most Active:</h4> ${user.name} - ${activity[0].minutesActive} mins`
  },

  displayWeeklyAvgSteps(date) {
    let avg = activity.getWeeklyAvgSteps(date)
    weekAvgSteps.innerHTML = `
    <p>Average steps per day:</p>
    <p class="stat">${avg}</p>`
  },

  displayWeeklyAvgMinutesActive(date) {
    let avg = activity.getWeeklyAvgMinutesActive(date)
    weekAvgMinsActive.innerHTML = `
    <p>Average minutes active per day:</p>
    <p class="stat">${avg}</p>`
  },

  displayWeeklyAvgFlights(date) {
    let avg = activity.getWeeklyAvgFlights(date)
    weekAvgFlights.innerHTML = `
    <p>Average flights per day:</p>
    <p class="stat">${avg}</p>`
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
    name.innerHTML = `<h4>Name</h4> ${userName}`;
    address.innerHTML = `<h4>Address</h4> ${userAddress}`;
    email.innerHTML = `<h4>Email</h4> ${userEmail}`;
    strideLength.innerHTML = `<h4>Stride Length</h4> ${userStrideLength}`;
    dailyStepGoal.innerHTML = `<h4>Daily Step Goal</h4> ${userDailyStepGoal}`;
    // stepGoalComparison.innerHTML = `<h4>Average Step Goal</h4> ${allAvgStepGoal}`;
    this.displayFriends();
  },

  displayFriends() {
    let userFriends = getFriends();
    let friendNames = userFriends.map(friend => friend.name);  
    if (friendNames.length > 1) {
      friends.innerHTML = `<h4>Friends</h4> ${friendNames.join(', ')}`;
    } else {
      friends.innerHTML = `<h4>Friend</h4> ${friendNames}`;
    }
  },

  displayStepChallenge(date) {
    let challengeUsers = calculateWeeklyStepChallenge(date)
    let rankedSteps = challengeUsers.map(user => Object.entries(user)).sort((a, b) => b[0][1] - a[0][1]);
    
    rankedSteps.forEach((step, i) => {
      stepChallenge.insertAdjacentHTML("beforeend", `<p>${i+1}. ${step[0][0]}: ${step[0][1]}</p>`);    
    });
  },

  displayExceedStepGoal() {
    let exceedStepsDays = activity.exceedStepGoal();
    exceedStepsDays.forEach((stepDay) => {
      exceedStepGoal.insertAdjacentHTML("beforeend", `<p>${stepDay}</p>`); 
    });
  },

  displayAvgHydration() {
    let avg = hydration.getAvgWater()
    avgHydration.innerHTML = `
    <p>Average Water Drank:</p>
    <p class="stat">${avg} oz</p>`
  },

  displayMaxStairs() {
    let max = activity.getMaxStairsClimbed()
    maxStairs.innerHTML = `
    <p>Maximum Flights Climbed:</p>
    <p class="stat">${max}</p>`
  }
}