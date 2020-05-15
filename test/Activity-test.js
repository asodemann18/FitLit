const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const activitySampleData = require('../sample-data/activity-sample')

let activity1, activity2, activity3, activity4,
  activity5, activity6, activity7, activity8,
  activity9, activity10, activity11, activity12,
  activity13;

let activityData;
let activity;

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

    activity = new Activity(1, activityData);
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

  it('should be an empty arry if invalid id is passed as an argument', () => {
    activity2 = new Activity(500, activityData)
    expect(activity2).to.deep.equal({ userActivity: [] });
  })

  it.skip('should return how many miles a user has walked for a given day', () => {
    expect(activity.getMilesWalked('2019/06/15')).to.equal(3);
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
    expect(activity.getWeeklyAvgMinutesActive('2019/06/15')).to.equal(160);
  })

  it('should only take a date as an argument', () => {
    expect(activity.getWeeklyAvgMinutesActive('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activity.getWeeklyAvgMinutesActive('2019-06-15')).to.equal('You must pass a valid date');
  })

  it.skip('should return whether or not a user reached a step goal', () => {
    expect(activity.reachStepGoal('2019/06/15')).to.equal('Did not meet step goal');
  })

  it.skip('should return whether or not a user exceeded a step goal', () => {
    expect(activity.exceedStepGoal()).to.deep.equal(["2019/06/19", "2019/06/20", "2019/06/22"]);
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
})