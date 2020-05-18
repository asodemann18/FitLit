const currentUser = new User(userData[0]);
const currentDate = "2019/09/22";

const sleep = new Sleep(currentUser.id, sleepData);
const sleepRepo = new SleepRepo(sleepData);
const usersRepo = new UsersRepo(userData);
const hydration = new Hydration(currentUser.id, hydrationData);
const activity = new Activity(currentUser.id, activityData, userData);
const activityRepo = new ActivityRepo(activityData);

const weekSleepHours = sleep.getWeeklySleepHours('2019/09/16');
const weekSleepQuality = sleep.getWeeklySleepQual('2019/09/16');
const weekOuncesDrank = hydration.getWeeklyWater('2019/09/16');

const todaySleepHours = document.getElementById("today-sleep-hours");
const todaySleepQuality = document.getElementById("today-sleep-quality");
const userAvgSleepHours = document.getElementById("user-avg-sleep-hours")
const userAvgSleepQuality = document.getElementById("user-avg-sleep-quality");
const allAvgSleepQuality = document.getElementById("all-avg-sleep-quality");
const longestSleepers = document.getElementById("longest-sleepers");
const highestQualSleepers = document.getElementById("highest-qual-sleepers");
const allHighestQualSleepers = document.getElementById("all-highest-qual-sleepers");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const strideLength = document.getElementById("stride-length");
const dailyStepGoal = document.getElementById("daily-step-goal");
const friends = document.getElementById("friends");
const stepGoalComparison = document.getElementById("step-goal-comparison");

domUpdates.displayAvgSleepQualityForAll();
domUpdates.displayLongestSleepers('2019/06/15');
domUpdates.displayHighestQualSleepers('2019/06/15');
domUpdates.displayAllQualitySleepers('2019/06/15');
domUpdates.displayName();
domUpdates.displayInfo();


// const displaySleepHoursForDay = (date) => {
//   let sleepHoursForDay = sleep.getDailySleepHours(date)
//   todaySleepHours.innerHTML = `You slept ${sleepHoursForDay} hours on ${date}`
// }

// const displaySleepQualForDay = (date) => {
//   let sleepQualForDay = sleep.getDailySleepQual(date)
//   todaySleepQuality.innerHTML = `You rated your sleep quality a ${sleepQualForDay} on ${date}`;
// }

// const displayAvgSleepHoursForUser = (date) => {
//   let avgSleepHoursForUser = sleep.getAvgSleepHours(date)
//   userAvgSleepHours.innerHTML = `You slept ${avgSleepHoursForUser} hours on ${date}`
// }

// const displayAvgSleepQualForUser = (date) => {
//   let avgSleepQualForUser = sleep.getAvgSleepQual(date)
//   userAvgSleepQuality.innerHTML = `You rated your sleep quality a ${avgSleepQualForUser} on ${date}`;
// }
const weekSleepHoursId = document.getElementById("week-sleep-hours").getContext("2d");
const weekSleepQualId = document.getElementById("week-sleep-quality").getContext("2d");
const todayHydration = document.getElementById("today-hydration")
const weekHydrationId = document.getElementById("week-hydration").getContext("2d");
const todayStepsTaken = document.getElementById("today-steps-taken")
const todayMinsActive = document.getElementById("today-mins-active")
const todayMilesWalked = document.getElementById("today-miles-walked")
const allUsersAvgSteps = document.getElementById("all-users-avg-steps")
const allUsersAvgMinsActive = document.getElementById("all-users-avg-mins-active")
const allUsersAvgFlights = document.getElementById("all-users-avg-flights")
const mostActiveUser = document.getElementById('most-active-user')

domUpdates.displaySleepHoursForDay(currentDate);
domUpdates.displaySleepQualForDay(currentDate);
domUpdates.displayAvgSleepHoursForUser();
domUpdates.displayAvgSleepQualForUser();
domUpdates.displayHydrationForDay(currentDate);
domUpdates.displayMinutesActiveForDay('2019/06/15');
domUpdates.displayMilesWalkedForDay('2019/06/15');
domUpdates.displayStepsTakenForDay('2019/06/15');
domUpdates.displayAllUsersAvgSteps('2019/06/15');
domUpdates.displayAllUsersAvgMinsActive('2019/06/15');
domUpdates.displayAllUsersAvgFlights('2019/06/15');
domUpdates.displayMostActiveUser('2019/06/15')

charts.weeklySleepHoursChart()
charts.weeklySleepQualChart()
charts.weeklyHydrationChart()