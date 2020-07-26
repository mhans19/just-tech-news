const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
//Remember how in user-routes.js we didn't use the word users in any routes? 
// That's because in this file we take those routes and implement them to another router instance, 
// prefixing them with the path /users at that time.

router.use('/posts', postRoutes);

module.exports = router;

//This file, like index.js in the models folder, 
//will serve as a means to collect all of the API routes and package them up for us