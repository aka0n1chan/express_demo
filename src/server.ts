import * as Express from 'express';

const app = Express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('Listen on port 3000');
});

export default app;
