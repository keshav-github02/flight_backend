const express = require('express');
const {PORT} = require('./config');

const app = express();


// console.log(process.env);
// console.log(`Server is running on port ${PORT}`);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);