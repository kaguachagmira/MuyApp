'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correoElectronico: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Huertos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idUsuario',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return Usuario;
};