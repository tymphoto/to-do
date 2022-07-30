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
