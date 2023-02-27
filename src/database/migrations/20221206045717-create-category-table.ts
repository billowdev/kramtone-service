import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.createTable('category',
        {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
          desc: {
            type: DataTypes.STRING(500),
            allowNull: true
          },
          image: {
            type: DataTypes.STRING(255),
            allowNull: true
          },
          created_at: {
            type: DataTypes.DATE,
            field: "created_at",
            defaultValue: new Date()
          },
          updated_at: {
            type: DataTypes.DATE,
            field: "updated_at",
            defaultValue: new Date()
          }
        }
      );
    }
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.dropTable('category');
    }
  )
};