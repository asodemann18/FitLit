domUpdates = {
  displaySleepHoursForDay(date) {
    const todaySleepHours = document.getElementById("today-sleep-hours");
    let sleepHoursForDay = sleep.getDailySleepHours(date)
    todaySleepHours.innerHTML = `
    <p>Hours slept:</p>
    <p class="stat">${sleepHoursForDay}</p>`
  },
  
  displaySleepQualForDay(date) {
    const todaySleepQuality = document.getElementById("today-sleep-quality");
    let sleepQualForDay = sleep.getDailySleepQual(date)
    todaySleepQuality.innerHTML = `
    <p>Sleep quality:</p>
    <p class="stat">${sleepQualForDay} / 5</p>`
  },

  displayAvgSleepHoursForUser() {
    const userAvgSleepHours = document.getElementById("user-avg-sleep-hours");
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
    const longestSleepers = document.getElementById("longest-sleepers");
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
    const highestQualSleepers = document.getElementById("highest-qual-sleepers");
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
    const allHighestQualSleepers = document.getElementById("all-highest-qual-sleepers");  
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
    const todayHydration = document.getElementById("today-hydration")
    let hydrationForDay = hydration.getDailyWater(date)
    todayHydration.innerHTML = `
    <p>Water drank:<p>
    <p class="stat">${hydrationForDay}oz</p>`
  },

  // displayMinutesActiveForDay(date) {
  //   let minutesActiveForDay = activity.getMinutesActive(date)
  //   todayMinsActive.innerHTML = `You were active for ${minutesActiveForDay} minutes on ${date}`
  // },

  displayMilesWalkedForDay(date) {
    const todayMilesWalked = document.getElementById("today-miles-walked");
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
    const allUsersAvgMinsActive = document.getElementById("all-users-avg-mins-active");
    let avg = activityRepo.calculateAvgMinActive(date)
    allUsersAvgMinsActive.innerHTML = `Users averaged ${avg} minutes active on ${date}`
  },

  displayAllUsersAvgFlights(date) {
    const allUsersAvgFlights = document.getElementById("all-users-avg-flights");
    let avg = activityRepo.calculateAvgStairs(date)
    allUsersAvgFlights.innerHTML = `Users averaged ${avg} flights of stairs climbed on ${date}`
  },

  displayMostActiveUser(date) {
    const mostActiveUser = document.getElementById('most-active-user')
    let activity = activityRepo.calculateMaxMinActive(date)
    let user = userData.find(user => user.id === activity[0].userID)
    mostActiveUser.innerHTML = `<h4>Most Active:</h4> ${user.name} - ${activity[0].minutesActive} mins`
  },

  displayWeeklyAvgSteps(date) {
    const weekAvgSteps = document.getElementById('week-steps-taken-avg');
    let avg = activity.getWeeklyAvgSteps(date)
    weekAvgSteps.innerHTML = `
    <p>Average steps per day:</p>
    <p class="stat">${avg}</p>`
  },

  displayWeeklyAvgMinutesActive(date) {
    const weekAvgMinsActive = document.getElementById('week-mins-active-avg');
    let avg = activity.getWeeklyAvgMinutesActive(date)
    weekAvgMinsActive.innerHTML = `
    <p>Average minutes active per day:</p>
    <p class="stat">${avg}</p>`
  },

  displayWeeklyAvgFlights(date) {
    const weekAvgFlights = document.getElementById('week-flights-avg');
    let avg = activity.getWeeklyAvgFlights(date)
    weekAvgFlights.innerHTML = `
    <p>Average flights per day:</p>
    <p class="stat">${avg}</p>`
  },

  displayName() {
    const greeting = document.getElementById("greeting");
    let name = currentUser.getName();
    greeting.innerHTML = `Hi, ${name}`;
  },

  displayInfo() {
    const name = document.getElementById("name");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const strideLength = document.getElementById    ("stride-length");
    const dailyStepGoal = document.getElementById   ("daily-step-goal");
    const friends = document.getElementById("friends");
    let userName = currentUser.name;
    let userAddress = currentUser.address;
    let userEmail = currentUser.email
    let userStrideLength = currentUser.strideLength;
    let userDailyStepGoal = currentUser.dailyStepGoal;
    //let allAvgStepGoal = usersRepo.getAvgStepGoal();
    name.innerHTML = `<h4>Name</h4> ${userName}`;
    address.innerHTML = `<h4>Address</h4> ${userAddress}`;
    email.innerHTML = `<h4>Email</h4> ${userEmail}`;
    strideLength.innerHTML = `<h4>Stride Length</h4> ${userStrideLength}`;
    dailyStepGoal.innerHTML = `<h4>Daily Step Goal</h4> ${userDailyStepGoal}`;
    // stepGoalComparison.innerHTML = `<h4>Average Step Goal</h4> ${allAvgStepGoal}`;
    this.displayFriends();
  },

  displayFriends() {
    const friends = document.getElementById("friends");
    let userFriends = getFriends();
    let friendNames = userFriends.map(friend => friend.name);  
    if (friendNames.length > 1) {
      friends.innerHTML = `<h4>Friends</h4> ${friendNames.join(', ')}`;
    } else {
      friends.innerHTML = `<h4>Friend</h4> ${friendNames}`;
    }
  },

  displayStepChallenge(date) {
    const stepChallenge = document.getElementById('step-challenge');
    let challengeUsers = calculateWeeklyStepChallenge(date)
    let rankedSteps = challengeUsers.map(user => Object.entries(user)).sort((a, b) => b[0][1] - a[0][1]);
    
    rankedSteps.forEach((step, i) => {
      stepChallenge.insertAdjacentHTML("beforeend", `<p>${i+1}. ${step[0][0]}: ${step[0][1]}</p>`);    
    });
  },

  displayExceedStepGoal() {
    const exceedStepGoal = document.getElementById("exceed-step-goal-dates");
    let exceedStepsDays = activity.exceedStepGoal();
    exceedStepsDays.forEach((stepDay) => {
      exceedStepGoal.insertAdjacentHTML("beforeend", `<p>${stepDay}</p>`); 
    });
  },

  displayAvgHydration() {
    const avgHydration = document.getElementById("user-avg-hydration");
    let avg = hydration.getAvgWater()
    avgHydration.innerHTML = `
    <p>Average Water Drank:</p>
    <p class="stat">${avg} oz</p>`;
  },

  displayMaxStairs() {
    const maxStairs = document.getElementById("user-max-stairs-climbed");
    let max = activity.getMaxStairsClimbed()
    maxStairs.innerHTML = `
    <p>Maximum Flights Climbed:</p>
    <p class="stat">${max}</p>`;
  }
}