const charts = {
  weeklySleepQualChart(id, data) {
    return new Chart(id, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Sleep Quality",
          data: data,
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

  weeklySleepHoursChart(id, data) {
    return new Chart(id, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Sleep Hours",
          data: data,
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

  weeklyHydrationChart(id, data) {
    return new Chart(id, {
      type: "line",
      data: {
        labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
        datasets: [{
          label: "Weekly Hydration",
          data: data,
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
  }
}