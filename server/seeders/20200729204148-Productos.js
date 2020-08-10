'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Productos', [
        //Frutas
        {
          categoria: 'Fruta',
          nombreComun: 'Manzana',
          nombreCientifico: 'Malus domestica',
          imagen: 'manzana.jpg',
          dificultad: 'Medio',
          fechaCosecha: 10,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Pera',
          nombreCientifico: 'Pyrus commusnis',
          imagen: 'pera.jpg',
          dificultad: 'Medio',
          fechaCosecha: 6,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Uva',
          nombreCientifico: 'Vitis',
          imagen: 'uva.jpg',
          dificultad: 'Facil',
          fechaCosecha: 3,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Sandia',
          nombreCientifico: 'Citrullus lanatus',
          imagen: 'sandia.jpg',
          dificultad: 'Facil',
          fechaCosecha: 90,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Melón',
          nombreCientifico: 'Cucumis melo',
          imagen: 'melon.jpg',
          dificultad: 'Dificil',
          fechaCosecha: 120,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Papaya',
          nombreCientifico: 'Carica papaya',
          imagen: 'papaya.jpg',
          dificultad: 'Facil',
          fechaCosecha: 360,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Fresa',
          nombreCientifico: 'Fragaria',
          imagen: 'fresa.jpg',
          dificultad: 'Facil',
          fechaCosecha: 150,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Mandarina',
          nombreCientifico: 'Citrus reticulata',
          imagen: 'mandarina.jpg',
          dificultad: 'Medio',
          fechaCosecha: 1,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Durazno',
          nombreCientifico: 'Prunus persica',
          imagen: 'durazno.jpg',
          dificultad: 'Dificil',
          fechaCosecha: 10,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          categoria: 'Fruta',
          nombreComun: 'Mora',
          nombreCientifico: 'Morus nigra',
          imagen: 'mora.jpg',
          dificultad: 'Facil',
          fechaCosecha: 180,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Legumbres
      {
        categoria: 'Legumbre',
        nombreComun: 'Acelga',
        nombreCientifico: 'Beta vulgaris var. cicla',
        imagen: 'MfsTrkTnnuOPJZzmXuzZbVze.jpg',
        dificultad: 'Facil',
        fechaCosecha: 70,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Apio',
        nombreCientifico: 'Apium graveolens',
        imagen: 'Fu6Hp2WjSTPkcF25AS9JbNMQ.jpg',
        dificultad: 'Medio',
        fechaCosecha: 120,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Berenjena',
        nombreCientifico: 'Solanum melongena',
        imagen: 'ztOV1DVcRS-87q8j-R3LSbOz.jpg',
        dificultad: 'Facil',
        fechaCosecha: 60,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Brocoli',
        nombreCientifico: 'Brassica oleracea var. italica',
        imagen: 'OwXtroWjEYqy_iFFOC4LRLv2.jpg',
        dificultad: 'Medio',
        fechaCosecha: 80,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Cebolla',
        nombreCientifico: 'Allium cepa',
        imagen: 'FObOW4wpGsGEBibUkw2QOwwx.jpg',
        dificultad: 'Facil',
        fechaCosecha: 160,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Coliflor',
        nombreCientifico: 'Brassica oleracea var. botrytis',
        imagen: 'AdAC6oFpVeQrsH00PYIWTI5E.jpg',
        dificultad: 'Medio',
        fechaCosecha: 180,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Espinaca',
        nombreCientifico: 'Spinacia oleracea',
        imagen: 'q5qvM3FRbhPJAQ8HyuhtZ2pV.jpg',
        dificultad: 'Facil',
        fechaCosecha: 60,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Lechuga',
        nombreCientifico: 'Lactuca sativa',
        imagen: 'hJDTDrV8WD6NZ4yoimYQPIl_.jpg',
        dificultad: 'Medio',
        fechaCosecha: 60,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Papa',
        nombreCientifico: 'Solanum tuberosum',
        imagen: 'eQRrmarLc1lwR3DqSueHl0nd.jpg',
        dificultad: 'Facil',
        fechaCosecha: 80,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Legumbre',
        nombreComun: 'Rabano',
        nombreCientifico: 'Raphanus sativus',
        imagen: '20iPjfKhaq1vOSwgV6UyF_mz.jpg',
        dificultad: 'Facil',
        fechaCosecha: 42,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Hierbas
      {
        categoria: 'Hierbas',
        nombreComun: 'Manzanilla' ,
        nombreCientifico: 'Chamaemelum nobile' ,
        imagen: '21.jpg',
        dificultad: 'Facil',
        fechaCosecha: 15,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Aloe vera' ,
        nombreCientifico: 'Aloe vera Mill' ,
        imagen: '22.jpg',
        dificultad: 'Medio',
        fechaCosecha: 2,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Jengibre' ,
        nombreCientifico: 'Zingiber officinale' ,
        imagen: '23.jpg',
        dificultad: 'Medio',
        fechaCosecha: 300,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Tomillo' ,
        nombreCientifico: 'Thymus' ,
        imagen: '24.jpg',
        dificultad: 'Medio',
        fechaCosecha: 1,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Diente de leon' ,
        nombreCientifico: 'Taraxacum officinale' ,
        imagen: '25.jpg',
        dificultad: 'Facil',
        fechaCosecha: 1,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Oregano' ,
        nombreCientifico: 'Origanum vulgare' ,
        imagen: '26.jpg',
        dificultad: 'Medio',
        fechaCosecha: 15,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Eneldo' ,
        nombreCientifico: 'Anethum graveolens' ,
        imagen: '27.jpg',
        dificultad: 'Facil',
        fechaCosecha: 2,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Curcuma' ,
        nombreCientifico: 'Curcuma longa' ,
        imagen: '28.jpg',
        dificultad: 'Facil',
        fechaCosecha: 240,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        categoria: 'Hierbas',
        nombreComun: 'Perejil' ,
        nombreCientifico: 'Petroselinum crispum' ,
        imagen: '29.jpg',
        dificultad: 'Facil',
        fechaCosecha: 90,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
     },
    {
        categoria: 'Hierbas',
        nombreComun: 'Menta' ,
        nombreCientifico: 'Mentha' ,
        imagen: '30.jpg',
        dificultad: 'Facil',
        fechaCosecha: 180,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
  }
    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Productos', null, {});
    
  }
};
