import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.json({ message: 'List of restaurants will be here' });
});

export default router;
