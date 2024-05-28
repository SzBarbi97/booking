import bodyParser from 'body-parser';
import express from 'express';
import { getHotel, getHotelCountries, getHotels } from './api/hotel';

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use('/images', express.static('./assets/images'));

app.get('/hotels', getHotels);
app.get('/hotels/countries', getHotelCountries);
app.get('/hotels/:id', getHotel);

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3001);
