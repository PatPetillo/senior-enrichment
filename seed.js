const db = require('./db');
const Student = require('./db/models').Student;
const Campus = require('./db/models').Campus;

db.sync({ force: true })
  .then(() => {
    console.log('Seeding database')
    return Campus.bulkCreate([
      {
        name: 'Citadel Of Ricks',
        image: './campuses/citadelOfRicks.jpg'
      }, {
        name: "King Kai's Planet",
        image: './campuses/KingKaisPlanet.png'
      }, {
        name: 'Harry Herpson High School',
        image: './campuses/harryHerpson.jpg'
      }, {
        name: 'Fullstack Academy',
        image: './campuses/fullstack.jpg'
      }, {
        name: 'P.S. 118',
        image: './campuses/ps118.jpg'
      }
    ])
  })
  .then(() => {
    return Student.bulkCreate([
      {
        name: 'Pat Petillo',
        email: 'PatPetillo@gmail.com',
        campusId: 4
      },  {
        name: 'Rick Sanchez',
        email: 'PickleRickYEAH@dimensionC173.earth',
        campusId: 1
      }, {
        name: 'Morty Smith',
        email: 'MortySmith@cartoonnetwork.net',
        campusId: 3
      }, {
        name: 'Son Goku (Kakaro)',
        email: 'TheRealSuperSaiyan@toonami.space',
        campusId: 2
      }, {
        name: 'Arnold',
        email: 'HEYArnold@nicktoons.com',
        campusId: 5
      }
    ])
  })
  .then(() => {
    console.log('Seeding complete')
    db.close();
    return null;
  })
