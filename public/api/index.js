const axios = require("axios");
const fs = require("fs");
// coinranking6132364129d46d1e0f670bdabddad5b31a19cf2db8dfd1e6

async function getUser() {
  try {
    let response = await axios.get("https://api.coinranking.com/v2/coins", {
      headers: {
        "Content-Type": "application/json",
        "X-My-Custom-Header":
          "coinranking6132364129d46d1e0f670bdabddad5b31a19cf2db8dfd1e6",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = response.data.data.coins;
    fs.writeFile("coins.json", JSON.stringify(data, null, 2), (err) => {
      console.log(err);
    });
    // console.log(response.data.data.coins[0]);
  } catch (error) {
    console.error(error);
  }
}

getUser();
