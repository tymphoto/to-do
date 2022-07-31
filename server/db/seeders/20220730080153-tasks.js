module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        text: 'Create React app',
        user_id: 1,
      },
      {
        text: 'Check all errors',
        user_id: 1,
      },
      {
        text: 'Show my work to HR',
        user_id: 1,
      },
      {
        text: 'Do not kill my self',
        user_id: 1,
      },
      {
        text: 'Task for user_2',
        user_id: 2,
      },
      {
        text: 'One more task for bla',
        user_id: 2,
      },
      {
        text: 'Task for user_3',
        user_id: 3,
      },
      {
        text: 'One more task for Ww',
        user_id: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
