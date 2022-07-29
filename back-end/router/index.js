/* const  express = require('express');
const router = express.Router();

router.get('/client', clientController.getclient)
router.get('/clientAll', clientController.getProdutAll)
router.get('/client/:id', clientController.getProdutId)
router.post('/client', clientController.creat)
router.delete('/client/:id', clientController.delete)
router.put('/client/:id', clientController.update)

*/

const  express = require('express');
const router = express.Router();
const clientController = require('../controllers/client-controllers')

router.post('/client', clientController.creat)
router.get('/client', clientController.getAll)
router.get('/client/:id', clientController.getId)
router.patch('/client/:id', clientController.update)
router.delete('/client/:id', clientController.delete)

module.exports = router; 