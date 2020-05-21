const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const activitySampleData = require('../sample-data/activity-sample')
const userSampleData = require('../sample-data/user-sample')

let activity1, activity2, activity3, activity4,
  activity5, activity6, activity7, activity8,
  activity9, activity10, activity11, activity12,
  activity13;

let activityData;
let activity;

let user1, user2, user3, user4;
let userData;

describe('Activity', () => {
  beforeEach(() => {
    activity1 = activitySampleData[0];
    activity2 = activitySampleData[1];
    activity3 = activitySampleData[2];
    activity4 = activitySampleData[3];
    activity5 = activitySampleData[4];
    activity6 = activitySampleData[5];
    activity7 = activitySampleData[6];
    activity8 = activitySampleData[7];
    activity9 = activitySampleData[8];
    activity10 = activitySampleData[9];
    activity11 = activitySampleData[10];
    activity12 = activitySampleData[11];
    activity13 = activitySampleData[12];

    activityData = [
      activity1,
      activity2,
      activity3,
      activity4,
      activity5,
      activity6,
      activity7,
      activity8,
      activity9,
      activity10,
      activity11,
      activity12,
      activity13,
    ];

    user1 = userSampleData[0];
    user2 = userSampleData[1];
    user3 = userSampleData[2];
    user4 = userSampleData[3];

    userData = [
      user1,
      user2,
      user3,
      user4,
    ];

    activity = new Activity(1, activityData, userData);
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function')
  })

  it('should return new instance of Activity', () => {
    expect(activity).to.be.an.instanceOf(Activity);
  })

  it('should throw an error if no arguments is passed as an argument', () => {
    expect(() => { new Activity() }).to.throw(Error);
  })

  it('should return user Activity Data', () => {
    expect(activityData.length).to.equal(13);
  })

  it('should return a specific user Activity Data', () => {
    expect(activity.userActivity.length).to.equal(10);
  })

  it('should return a specific user User Data', () => {
    expect(activity.user.id).to.equal(1);
  })

  it('should throw an error if an invalid id is passed as an argument', () => {
    expect(() => { new Activity(500, activityData, userData) }).to.throw(Error);
  })

  it('should return how many steps a user has taken for a given day', () => {
    expect(activity.getStepsTaken('2019/06/15')).to.equal(3577);
  })

  it('should return how many miles a user has walked for a given day', () => {
    expect(activity.getMilesWalked('2019/06/15')).to.equal(2.9);
  })

  it('should only take a date as an argument', () => {
    expect(activity.getMilesWalked('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getMilesWalked('2019-06-15')).to.equal('You must pass a valid date');
  })

  it('should return how many minutes active a user was on a given day', () => {
    expect(activity.getMinutesActive('2019/06/15')).to.equal(140);
  })

  it('should only take a date as an argument', () => {
    expect(activity.getMinutesActive('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getMinutesActive('2019-06-15')).to.equal('You must pass a valid date');
  })

  it('should return average minutes active a user was during a given week', () => {
    expect(activity.getWeeklyAvgProps('2019/06/15', 'minutesActive')).to.equal(160);
  })

  it('should only take a date as an argument', () => {
    expect(activity.getWeeklyAvgProps('test', 'minutesActive')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getWeeklyAvgProps('2019-06-15', 'minutesActive')).to.equal('You must pass a valid date');
  })

  it('should return whether or not a user reached a step goal on a specific day', () => {
    expect(activity.reachStepGoal('2019/06/15')).to.equal('Step goal not reached for today.');
  })

  it('should only take a date as an argument', () => {
    expect(activity.reachStepGoal('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.reachStepGoal('2019-06-15')).to.equal('You must pass a valid date');
  })

  it('should return all the days a user exceeded their step goal', () => {
    expect(activity.exceedStepGoal()).to.deep.equal(["2019/06/19", "2019/06/20", "2019/06/22"]);
  })

  it('should return all the days a user exceeded their step goal even when an argument is passed', () => {
    expect(activity.exceedStepGoal(123)).to.deep.equal(["2019/06/19", "2019/06/20", "2019/06/22"]);
  })

  it('should return a user all-time stair climbing record', () => {
    expect(activity.getMaxStairsClimbed()).to.equal(37);
  })

  it('should return a user all-time stair climbing record even if an argument is given', () => {
    expect(activity.getMaxStairsClimbed(3)).to.equal(37);
  })

  it('should return a date', () => {
    expect(activity.checkDate('2019/06/15')).to.equal('2019/06/15');
  })

  it('should show a users step count for each day of a week', () => {
    expect(activity.getActivityPropForWeek('2019/06/15', 'numSteps')).to.deep.equal([3577, 4294, 7402, 3486, 11374, 14810, 2634])
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getActivityPropForWeek('2019-06-15', 'numSteps')).to.equal('You must pass a valid date');
  })

  it('should show a users step count for each day of a week', () => {
    expect(activity.getActivityPropForWeek('2019/06/15', 'flightsOfStairs')).to.deep.equal([16, 10, 33, 32, 13, 18, 5])
  })
  
  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getActivityPropForWeek('2019-06-15','flightsOfStairs')).to.equal('You must pass a valid date');
  })

  it('should show a users step count for each day of a week', () => {
    expect(activity.getActivityPropForWeek('2019/06/15', 'minutesActive')).to.deep.equal([140, 138, 116, 114, 213, 287, 107])
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getActivityPropForWeek('2019-06-15', 'minutesActive')).to.equal('You must pass a valid date');
  })

  it('should calculate the average steps taken in a given week', () => {
    expect(activity.getWeeklyAvgProps('2019/06/15', 'numSteps')).to.equal(6797)
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getWeeklyAvgProps('2019-06-15', 'numSteps')).to.equal('You must pass a valid date');
  })

  it('should calculate the average flights climbed in a given week', () => {
    expect(activity.getWeeklyAvgProps('2019/06/15', 'flightsOfStairs')).to.equal(19);
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getWeeklyAvgProps('2019-06-15', 'flightsOfStairs')).to.equal('You must pass a valid date');
  })

  it('should return number of stairs climbed for a specific date', () => {
    expect(activity.getStairsClimbed('2019/06/15')).to.equal(16);
  })

  it('should only take a date as an argument', () => {
    expect(activity.getStairsClimbed('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getStairsClimbed('2019-06-15')).to.equal('You must pass a valid date');
  })
})