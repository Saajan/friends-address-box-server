
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

router.get('/user/:id', async (req, res) => {
  let { id } = req.params;

  if (id) {
    const responsePromise = getModels().then(async (models) => {
      return await models.address.findAll({
        where: {
          userId: id
        },
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
  } else {
    res.render('error', { error: "User Id not present" })
  }
});

export default router;
