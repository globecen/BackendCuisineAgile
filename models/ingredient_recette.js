/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredient_recette', {
    id_ingredient_recette: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    unite_ingredient: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    image_ingredient_recette: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ingredient_recette',
    timestamps: false
    });
};
