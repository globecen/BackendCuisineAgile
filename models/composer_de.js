/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('composer_de', {
    id_ingredient_recette: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingredient_recette',
        key: 'id_ingredient_recette'
      }
    },
    id_recette: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recette',
        key: 'id_recette'
      }
    },
    quantite: {
      type: DataTypes.CHAR(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'composer_de',
    timestamps: false
    });
};
