const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());

require('./routes')(app);

app.listen(PORT, () => {
    console.log('Server running at localhost:' + PORT);
});
