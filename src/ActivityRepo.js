class ActivityRepo {
  constructor(activityRepoData) {
    this.activityRepoData = activityRepoData;
  }

  checkDate(date) {
    let isDate = new Date(date);
    let newIsDate = isDate.getFullYear() + "/" +
      ("0" + (isDate.getMonth() + 1)).slice(-2) + "/" +
      ("0" + isDate.getDate()).slice(-2);
    return newIsDate;
  }

  calculateAvgActivityProp(date, property) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
      let avg = dailyAllActivity.reduce((acc, activity) => {
        return acc += activity[property] / dailyAllActivity.length;
      }, 0)
      return Math.ceil(avg);
    }
  }

  calculateMaxMinActive(date) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
      let minActiveSort = dailyAllActivity.sort((a, b) => b.minutesActive - a.minutesActive);
      let mostActive = [];
      minActiveSort.forEach(activity => {
        if (activity.minutesActive === minActiveSort[0].minutesActive) {
          mostActive.push(activity);
        }
      })
      return mostActive;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}