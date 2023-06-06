const express = require('express');
const { booksControllers } = require('../controllers/booksControllers');

const booksRoutes = express.Router();

booksRoutes.get('/', booksControllers.getAll)
booksRoutes.get('/:id', booksControllers.getById)
booksRoutes.post('/', booksControllers.add)
booksRoutes.delete('/:id',booksControllers.deleteById)

module.exports = {
    booksRoutes
}