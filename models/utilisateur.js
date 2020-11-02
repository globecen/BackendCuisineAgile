/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    email_utilisateur: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    password_utilisateur: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    nom_utilisateur: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    prenom_utilisateur: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sex_utilisateur: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date_de_naissance_utilisateur: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    numero_rue_utlisateur: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    adresse_utilisateur: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ville_utilisateur: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    code_postal_utilisateur: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pays_utilisateur: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    image_avatar_utilisateur: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, 
  {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false
    });
};
