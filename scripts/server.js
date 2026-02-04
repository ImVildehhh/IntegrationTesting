const express = require('express');
const { hexToRgb } = require('./hexToRgb');
const app = express();
const port = 3000;

app.get('/hex-to-rgb', (req, res) => {
  const hex = req.query.hex;
  
  try {
      if (!hex) {
        return res.status(400).json({
          error: 'Invalid or missing hex value. Example: FF00AA or #FF00AA'
        });
      }

  const rgb = hexToRgb(hex);
  
  return res.json({
    hex: hex.startsWith('#') ? hex : `#${hex}`,
    rgb
  });


  } catch (err) {
      return res.status(400).json({
        error: 'Invalid or missing hex value. Example: FF00AA or #FF00AA'
      });
    }
});

module.exports = { app };

if(require.main === module){
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
