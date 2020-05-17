const currentUser = new User(userData[0]);
const currentDate = "2019/09/22";

const sleep = new Sleep(currentUser.id, sleepData);
const sleepRepo = new SleepRepo(sleepData);
const usersRepo = new UsersRepo(userData);
const hydration = new Hydration(currentUser.id, hydrationData);
const activity = new Activity(currentUser.id, activityData, userData);
const activityRepo = new ActivityRepo(activityData);

const weekSleepHours = sleep.getWeeklySleepHours('2019/06/15');
const weekSleepQuality = sleep.getWeeklySleepQual('2019/06/15');
const weekOuncesDrank = hydration.getWeeklyWater('2019/06/15')

const todaySleepHours = document.getElementById("today-sleep-hours");
const todaySleepQuality = document.getElementById("today-sleep-quality");
const userAvgSleepHours = document.getElementById("user-avg-sleep-hours")
const userAvgSleepQuality = document.getElementById("user-avg-sleep-quality");
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

domUpdates.displaySleepHoursForDay('2019/06/15');
domUpdates.displaySleepQualForDay('2019/06/15');
domUpdates.displayAvgSleepHoursForUser('2019/06/15');
domUpdates.displayAvgSleepQualForUser('2019/06/15');
domUpdates.displayHydrationForDay('2019/06/15');
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