'use strict';
module.exports = function(sequelize, DataTypes) {
  var Attendee = sequelize.define('Attendee', {
    application_start: DataTypes.STRING,
    application_submit: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    tshirt_size: DataTypes.STRING,
    diet_restriction: DataTypes.STRING,
    school: DataTypes.STRING,
    age: DataTypes.INTEGER,
    highschool_student: DataTypes.BOOLEAN,
    require_travel_reimbursement: DataTypes.BOOLEAN,
    first_hackathon: DataTypes.BOOLEAN,
    github_account: DataTypes.STRING,
    linkedin_account: DataTypes.STRING,
    personal_website: DataTypes.STRING,
    resume: DataTypes.BLOB,
    work_preferences: DataTypes.ARRAY(DataTypes.STRING),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Attendee;
};
