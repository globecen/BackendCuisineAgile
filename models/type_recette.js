/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_recette', {
    id_type_recette: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    url_image_type_recette: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    id_recette: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'recette',
        key: 'id_recette'
      },
      unique: "Type_recette_Recette_FK"
    }
  }, {
    sequelize,
    tableName: 'type_recette',
    timestamps: false
    });
};
