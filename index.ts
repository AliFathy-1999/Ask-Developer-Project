require("dotenv").config();
const app = require('./Backend/app');
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server Running here 👉 http://localhost:${port}`);
})
