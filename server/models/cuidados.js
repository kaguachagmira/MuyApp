'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuidados = sequelize.define('Cuidados', {
    frecuenciaRiego: DataTypes.INTEGER,
    cantidadRiego: DataTypes.INTEGER,
    resistenciaFrio: DataTypes.STRING,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Cuidados.associate = function(models) {
    Cuidados.hasMany(models.Productos,{
      foreignKey:{
        type:DataTypes.INTEGER,
        name: 'idCuidado',
        allowNull: false,
        unique:false
      },
      sourceKey: 'id'
    })
  };
  return Cuidados;
};