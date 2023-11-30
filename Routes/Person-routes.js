const express = require('express');
const router = express.Router();
const personController = require('../Controller/Person-controller');

router.post('/create', personController.createPerson);
router.post('/create/many', personController.createPersons);
router.get('/findbyname/:name', personController.findPeopleByName);
router.get('/findPersonByFavoriteFood/:favoriteFoods', personController.findPersonByFavoriteFood);
router.get('/findPersonById/:Id', personController.findPersonById);
router.put('/update/:Id', personController.updatePersonFavoriteFood );
router.put('/updateAge/:name', personController.updatePersonAge );
router.delete('/delete/:Id', personController.deletePersonById );
router.delete('/deleteByName/:name', personController.deletePeopleByName );
router.get('/findBurrito/:name', personController.findBurritoLovers );











module.exports = router;
