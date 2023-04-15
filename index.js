const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI =
  'mongodb+srv://harieta5hubanova:NewYorkGirl13@ironhack.uxmxz2s.mongodb.net/recipe-app';

async function updateDatabase() {
  // Connection to the database "recipe-app"
  try {
    const x = await mongoose.connect(MONGODB_URI);
    console.log('connected to', x.connections[0].name);
    await Recipe.deleteMany();

    //Start coding here
    //2 iteration
    await Recipe.create({
      title: "Harieta's recipe",
      level: 'UltraPro Chef',
      ingredients: [
        '3 1/2 pounds boneless pork shoulder, cut into large pieces',
        '1 tablespoon freshly ground black pepper',
        '1 tablespoon kosher salt, or more to taste',
        '2 tablespoons vegetable oil',
        '2 bay leaves',
        '2 teaspoons ground cumin',
        '1 teaspoon dried oregano',
        '1/4 teaspoon cayenne pepper',
        '1 orange, juiced and zested'
      ],
      cuisine: 'American',
      dishType: 'main_course',
      image:
        'https://images.media-allrecipes.com/userphotos/720x405/2280918.jpg',
      duration: 160,
      creator: 'Chef John'
    });

    //3 iteration
    await Recipe.insertMany(data);

    //4 iteration
    await Recipe.findOneAndUpdate(
      { title: 'Rigatoni alla Genovese' },
      { duration: 100 }
    );
    console.log('Success');

    //5 iteration
    await Recipe.deleteOne({ title: 'Carrot Cake' });
    console.log(
      'Successfully deleted Carrot Cake recipe!Product no longer available!'
    );
  } catch (e) {
    console.error('Error connecting to the database', error);
  } finally {
    //6 iteration
    mongoose.connection.close();
  }
}

updateDatabase();
