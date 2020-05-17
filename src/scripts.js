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

const todaySleepHours = document.getElementById("today-sleep-hours");
const todaySleepQuality = document.getElementById("today-sleep-quality");
const userAvgSleepHours = document.getElementById("user-avg-sleep-hours")
const userAvgSleepQuality = document.getElementById("user-avg-sleep-quality");

const displaySleepHoursForDay = (date) => {
  let sleepHoursForDay = sleep.getDailySleepHours(date)
  todaySleepHours.innerHTML = `You slept ${sleepHoursForDay} hours on ${date}`
}

const displaySleepQualForDay = (date) => {
  let sleepQualForDay = sleep.getDailySleepQual(date)
  todaySleepQuality.innerHTML = `You rated your sleep quality a ${sleepQualForDay} on ${date}`;
}

const displayAvgSleepHoursForUser = (date) => {
  let avgSleepHoursForUser = sleep.getAvgSleepHours(date)
  userAvgSleepHours.innerHTML = `You slept ${avgSleepHoursForUser} hours on ${date}`
}

const displayAvgSleepQualForUser = (date) => {
  let avgSleepQualForUser = sleep.getAvgSleepQual(date)
  userAvgSleepQuality.innerHTML = `You rated your sleep quality a ${avgSleepQualForUser} on ${date}`;
}

displaySleepHoursForDay('2019/06/15');
displaySleepQualForDay('2019/06/15');
displayAvgSleepHoursForUser('2019/06/15');
displayAvgSleepQualForUser('2019/06/15');

const weekSleepHoursId = document.getElementById("week-sleep-hours").getContext("2d");
const weekSleepQualId = document.getElementById("week-sleep-quality").getContext("2d");


let weeklySleepHoursChart = new Chart(weekSleepHoursId, {
  type: "line",
  data: {
    labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
    datasets: [{
      label: "Weekly Sleep Hours",
      data: weekSleepHours,
      fill: false,
      backgroundColor: [
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Weekly Sleep Hours",
    }
  }
});

let weeklySleepQualChart = new Chart(weekSleepQualId, {
  type: "line",
  data: {
    labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
    datasets: [{
      label: "Weekly Sleep Quality",
      data: weekSleepQuality,
      fill: false,
      backgroundColor: [
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Weekly Sleep Quality",
    }
  }
});

const weekOuncesDrank = hydration.getWeeklyWater('2019/06/15')

const weekHydration = document.getElementById("week-hydration").getContext("2d");

const weekHydrationChart = new Chart(weekHydration, {
  type: "line",
  data: {
    labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
    datasets: [{
      label: "Weekly Hydration",
      data: weekOuncesDrank,
      fill: false,
      backgroundColor: [
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Weekly Ounces Drank",
    }
  }
});

const todayHydration = document.getElementById("today-hydration")

const displayHydrationForDay = (date) => {
  let hydrationForDay = hydration.getDailyWater(date)
  todayHydration.innerHTML = `You drank ${hydrationForDay} ounces on ${date}`
}

displayHydrationForDay('2019/06/15')