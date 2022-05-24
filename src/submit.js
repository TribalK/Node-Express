// Necessary for Express to work
const express = require('express');
const app = express();
const axios = require('axios');
const Circle = require('./circle');

const c1 = new Circle(3.56);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/dogAPI', async (req, res, next) => {
  try {
    const getDog = await axios('https://dog.ceo/api/breeds/image/random');
    console.log(getDog);
    return res.send("success");
  } catch (error) {
    return next(error);
  }
})

app.get('/calcPerimeter', async (req, res) => {
    return res.send(`The perimeter of our circle is: ${c1.getPerimeter()}`);
});

app.get('/calcArea', async (req, res) => {
    return res.send(`The area of our circle is: ${c1.getArea()}`);
});
