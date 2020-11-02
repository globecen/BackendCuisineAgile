/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avoir_pour_favori', {
    id_recette: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recette',
        key: 'id_recette'
      }
    },
    email_utilisateur: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilisateur',
        key: 'email_utilisateur'
      }
    },
    ajouter_au_favori: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'avoir_pour_favori',
    timestamps: false
    });
};
