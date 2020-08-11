'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Personas', [
        {
          nombre: 'Kevin',
          apellido: 'Guachagmira',
          correoElectronico: 'kevinguachagmira@gmail.com',
          psw: '12345678',
          foto: 'a8vN04xVCj2kn58pKPOo-WMj.jpg',
          confirmacion: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: 'Henry',
          apellido: 'Alvarado',
          correoElectronico: 'henryAlvarado@gmail.com',
          psw: '12345678',
          foto: 'admin_henry.png',
          confirmacion: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: 'Jazmin',
          apellido: 'Sanchez',
          correoElectronico: 'jazminSanchez@gmail.com',
          psw: '12345678',
          foto: 'admin_jazmin.png',
          confirmacion: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: 'Pedro',
          apellido: 'Garcia',
          correoElectronico: 'pedroGarcia@gmail.com',
          psw: '12345678',
          foto: 'a8vN04xVCj2kn58pKPOo-WMj.jpg',
          confirmacion: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: 'Juan',
          apellido: 'Sanchez',
          correoElectronico: 'juanSanchez@gmail.com',
          psw: '12345678',
          foto: 'a8vN04xVCj2kn58pKPOo-WMj.jpg',
          confirmacion: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Personas', null, {});
  }
};
