const charts = {
  weeklySleepQualChart(date) {
    const weekSleepQuality = sleep.getWeeklySleepProp(date, 'sleepQuality');
    const weekSleepQualId = document.getElementById("week-sleep-quality");
    return new Chart(weekSleepQualId, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Sleep Quality",
          data: weekSleepQuality,
          fill: false,
          backgroundColor: [
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
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
        // maintainAspectRatio: false,
        // responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Weekly Sleep Quality",
        }
      }
    });
  },

  weeklySleepHoursChart(date) {
    const weekSleepHours = sleep.getWeeklySleepProp(date, 'hoursSlept');
    const weekSleepHoursId = document.getElementById("week-sleep-hours");
    return new Chart(weekSleepHoursId, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Sleep Hours",
          data: weekSleepHours,
          fill: false,
          backgroundColor: [
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
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
        // maintainAspectRatio: false,
        // responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Weekly Sleep Hours",
        }
      }
    });
  },

  weeklyHydrationChart(date) {
    const weekOuncesDrank = hydration.getWeeklyWater(date);
    const weekHydrationId = document.getElementById("week-hydration");
    return new Chart(weekHydrationId, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Hydration",
          data: weekOuncesDrank,
          fill: false,
          backgroundColor: [
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
          ],
          borderColor: [
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
            "rgba(30,144,255, 1)",
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
        //maintainAspectRatio: false,
        //responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Weekly Ounces Drank",
        }
      }
    });
  },
  
  weeklyStepsChart() {
    return new Chart(weekStepsId, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Step Count",
          data: weekStepCount,
          fill: false,
          backgroundColor: [
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
          ],
          borderColor: [
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
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
        // maintainAspectRatio: false,
        // responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Weekly Step Count",
        }
      }
    });
  },
  
  weeklyFlightsChart() {
    return new Chart(weekFlightsId, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Step Count",
          data: weekFlightsClimbed,
          fill: false,
          backgroundColor: [
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
          ],
          borderColor: [
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
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
        // maintainAspectRatio: false,
        // responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Weekly Flights Climbed",
        }
      }
    });
  },

  weeklyMinsActiveChart() {
    return new Chart(weekMinsActiveId, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Step Count",
          data: weekMinsActive,
          fill: false,
          backgroundColor: [
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
          ],
          borderColor: [
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
            "rgb(60, 179, 113, .8)",
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
        // maintainAspectRatio: false,
        // responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Weekly Minutes Active",
        }
      }
    });
  },

  dailyStepsCompareChart(date) {
    const dailyStepsTaken = activity.getActivityPropForDay(date, 'numSteps');
    const allAvgDailyStepsTaken = activityRepo.calculateAvgActivityProp(currentDate, 'numSteps');
    const dailyStepComparison = document.getElementById('daily-step-comparison');
    return new Chart(dailyStepComparison, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'You',
              legend: false,
              data: [dailyStepsTaken, allAvgDailyStepsTaken],
              fill: false,
              backgroundColor: [
                "rgb(60, 179, 113, .8)",
                "rgb(255, 140, 0, .8)",],
          }, {
              label: 'Daily Step Goal',
              data: [currentUser.dailyStepGoal, currentUser.dailyStepGoal],
              type: 'line',
              fill: false,
              backgroundColor: [
                "rgb(0, 0, 0)",
                "rgb(0, 0, 0)",
              ],
              borderColor: [
                "rgb(0, 0, 0)",
              ],
          }],
          labels: ['You', 'All User\s Daily Avg']
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
          display: true,
          text: "Daily Steps",
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          position: 'bottom',
          labels: {
            filter: function(legendItem, chartData) {
              if (legendItem.datasetIndex === 0) {
                return false;
              }
             return true;
             },
          }
        }, 
      }
    });
  },

  dailyMinActiveCompareChart(date) {
    const dailyMinActive = activity.getActivityPropForDay(date, 'minutesActive');
    const allAvgDailyMinActive = activityRepo.calculateAvgActivityProp(currentDate, 'minutesActive');
    const dailyMinActiveComparison = document.getElementById('daily-minutes-active-comparison');
    return new Chart(dailyMinActiveComparison, {
      type: 'bar',
      data: {
          datasets: [{
              //label: 'You',
              legend: false,
              data: [dailyMinActive, allAvgDailyMinActive],
              fill: false,
              backgroundColor: [
                "rgb(60, 179, 113, .8)",
                "rgb(255, 140, 0, .8)",],
          }],
          labels: ['You', 'All User\s Daily Avg']
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
          display: true,
          text: "Daily Minutes Active",
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        }, 
      }
    });
  },

  dailyFlightsCompareChart(date) {
    const dailyFlightsClimbed = activity.getActivityPropForDay(date, 'flightsOfStairs');
    const allAvgFlightsClimbed = activityRepo.calculateAvgActivityProp(currentDate, 'flightsOfStairs');
    const dailyFlightsComparison = document.getElementById('daily-flights-climbed-comparison');   
    return new Chart(dailyFlightsComparison, {
      type: 'bar',
      data: {
          datasets: [{
              legend: false,
              data: [dailyFlightsClimbed, allAvgFlightsClimbed],
              fill: false,
              backgroundColor: [
                "rgb(60, 179, 113, .8)",
                "rgb(255, 140, 0, .8)",],
          }],
          labels: ['You', 'All User\s Daily Avg']
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
          display: true,
          text: "Daily Flights Climbed",
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        }, 
      }
    });
  }, 

  allTimeStepCompareChart() {
    const userDailyStepGoal = currentUser.dailyStepGoal;
    const allAvgStepGoal = usersRepo.getAvgStepGoal();
    const allTimeStepComparison = document.getElementById("all-time-step-goal-comparison");
    return new Chart(allTimeStepComparison, {
      type: 'bar',
      data: {
          datasets: [{
              legend: false,
              data: [userDailyStepGoal, allAvgStepGoal],
              fill: false,
              backgroundColor: [
                "rgb(60, 179, 113, .8)",
                "rgb(255, 140, 0, .8)",],
          }],
          labels: ['Your Goal', 'All User\s Avg']
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
          display: true,
          text: "Step Goal",
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        }, 
      }
    });
  }, 

  allTimeSleepQualCompareChart() {
    const userAllTimeAvgSleepQual = sleep.getAvgSleepProp('sleepQuality');
    const AllTimeAvgSleepQual = sleepRepo.calculateAverageSleep();
    const allTimeSleepQualComparison = document.getElementById("all-time-sleep-quality-comparison");
    return new Chart(allTimeSleepQualComparison, {
      type: 'bar',
      data: {
          datasets: [{
            legend: false,
            data: [userAllTimeAvgSleepQual, AllTimeAvgSleepQual],
            fill: false,
            backgroundColor: [
              "rgba(153, 102, 255, .8)",
              "rgb(255, 140, 0, .8)",],
          }],
          labels: ['Your Avg', 'All User\s Avg']
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
          display: true,
          text: "Sleep Quality",
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        }, 
      }
    });
  }
}