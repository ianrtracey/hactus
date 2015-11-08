'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("Attendee", [{
      application_start: "1111-22-33 44:55:66",
      application_submit: "1111-22-33 44:55:67",
      name: "Travis sucks at Postgres",
      email: "travis@shitty.postgres.com",
      gender: "M",
      tshirt_size: "XL",
      diet_restriction: "",
      school: "University of Arizona",
      age: 26,
      highschool_student: false,
      require_travel_reimbursement: false,
      first_hackathon: false,
      github_account: "https://github.com/fuckyou",
      linkedin_account: "https://linkedin.com/fuckyou",
      personal_website: "https://fuck.you",
      resume: "bits bits bits",
      work_preferences: ["one", "two", "three"],
      created_at: Sequelize.NOW,
      update_at: Sequelize.NOW
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Attendee")
  }
};
