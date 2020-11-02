/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recette', {
    id_recette: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nom_recette: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url_image_recette: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre_de_personnes_recette: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    temps_de_preparation_recette: {
      type: DataTypes.TIME,
      allowNull: false
    },
    temps_de_cuissons_recette: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'recette',
    timestamps: false
    });
};
