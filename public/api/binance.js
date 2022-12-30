const axios = require("axios");
const fs = require("fs");

const options = {
  method: "GET",
  url: "https://binance43.p.rapidapi.com/ticker/price",
  headers: {
    "X-RapidAPI-Key": "95bfecdcb3msh95861989bc959a2p1d90c9jsnd8a79b367227",
    "X-RapidAPI-Host": "binance43.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    const data = response.data;
    fs.writeFile("dolar.json", JSON.stringify(data, null, 2), (err) => {
      console.log(err);
    });
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
