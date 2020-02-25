
import express from 'express';
import getModels from '../models';

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('api working');
});

router.get('/users', async (req, res) => {
  const responsePromise = getModels().then(async (models) => {
    return await models.user.findAll({
      raw: true
    });
  });
  responsePromise.then(data => {
    res.json(data);
  }).catch(e => {
    console.log(e);
    res.status(500)
    res.render('error', { error: e })
  });
});

router.get('/user', async (req, res) => {

});

export default router;
