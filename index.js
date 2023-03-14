import express from 'express';

const app = express();
const port = (process.env.PORT || 3000); // ifVariable PORT not defined, use 3000 


app.listen(port);
console.log('server listening on port', port);