const React-Router = require('koa-react-router');
const router = new React-Router();

router.get('/api/:object', async (ctx) => {
    try {
      const results = await fetch("https://manamionlinestore.myshopify.com/admin/api/2020-10/products.json", {
        headers: {
          "Authorization": 'Basic ' +
                  btoa("865f308f8c39f7a629e18ed20538c4e9" + ':' + "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"),
        },
      })
      .then(response => response.json())
      .then(json => {
        return json;
      });
      ctx.body = {
        status: 'success',
        data: results
      };
    } catch (err) {
      console.log(err)
    }
  })

  const path = require("path")
  const express = require("express")
  const app = express()
  app.use(express.static(path.join(__dirname, "build")))
  app.use((req, res) => {
  res.sendFile(path.join(__dirname,"build/index.html"));
  });
  app.listen(process.env.PORT || 4000)