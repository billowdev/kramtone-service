import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.createTable('indigotone',
        {
          id: {
            type: DataTypes.STRING(8),
            primaryKey: true
          },
          cname: {
            type: DataTypes.STRING(20),
            allowNull: false,
          },
          cnameth: {
            type: DataTypes.STRING(20),
            allowNull: false,
          },
          hex: {
            type: DataTypes.STRING(10),
            unique: true,
            allowNull: false,
          },
          red: {
            type: DataTypes.STRING(3),
            allowNull: false,
          },
          green: {
            type: DataTypes.STRING(3),
            allowNull: false,
          },
          blue: {
            type: DataTypes.STRING(3),
            allowNull: false,
          },
        }
      );
    }
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.dropTable('indigotone');
    }
  )
};