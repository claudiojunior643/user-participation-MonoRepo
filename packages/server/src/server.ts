import app from './app';

app.listen(process.env.SERVER_PORT, () => {
  console.log('started on PORT: ' + process.env.SERVER_PORT);
});
