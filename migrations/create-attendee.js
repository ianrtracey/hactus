'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Attendees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      application_start: {
        type: Sequelize.STRING
      },
      application_submit: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      tshirt_size: {
        type: Sequelize.STRING
      },
      diet_restriction: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      highschool_student: {
        type: Sequelize.BOOLEAN
      },
      require_travel_reimbursement: {
        type: Sequelize.BOOLEAN
      },
      first_hackathon: {
        type: Sequelize.BOOLEAN
      },
      github_account: {
        type: Sequelize.STRING
      },
      linkedin_account: {
        type: Sequelize.STRING
      },
      personal_website: {
        type: Sequelize.STRING
      },
      resume: {
        type: Sequelize.BLOB
      },
      work_preferences: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Attendees');
  }
};
