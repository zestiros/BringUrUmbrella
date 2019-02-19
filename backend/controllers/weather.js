import Weather from '../models/weather';

export const index = (req, res, next) => {
    // Find all movies and return json response
    Weather.find().lean().exec((err, weathers) => res.json(weathers));
};