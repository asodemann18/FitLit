const charts = {
  weeklySleepQualChart() {
    return new Chart(weekSleepQualId, {
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
  },

  weeklySleepHoursChart() {
    return new Chart(weekSleepHoursId, {
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
  },

  weeklyHydrationChart() {
    return new Chart(weekHydrationId, {
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
          text: "Weekly Minutes Active",
        }
      }
    });
  }
}