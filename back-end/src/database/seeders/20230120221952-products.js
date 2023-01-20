'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
    [{
      id: 1,
      name: 'Skol Lata 250ml',
      price: 2.20,
      urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
    },
    // to do
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
