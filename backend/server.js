const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

// const http = require("http");
// const server = http.createServer(app);

require("dotenv").config();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

/*******************************
 *****importing all my routes ***
 ********************************/

const authRoutes = require("./routes/auth");
const internRoutes = require("./routes/intern");
const postRoutes = require("./routes/post");
const companyRoutes = require("./routes/company");
const applicationRoutes = require("./routes/application");



/*******************************
 ******** Mongo db connection ***
 ********************************/
const connection = require("./mongoConnect");
connection();


/*******************
 *****  middleware  **
 *********************/
app.use(express.json()); //just as body parser
app.use(helmet()); //help securing the request send
app.use(cors()); //for cross platform request
app.use(morgan("common")); //send in the console the detail about the request you did


/*******************************
 ******** Musing the routes  ***
 ********************************/
app.use("/auth", authRoutes);
app.use("/intern", internRoutes);
app.use("/post", postRoutes);
app.use("/company", companyRoutes);
app.use("/application", applicationRoutes);




/*******************************
 ******** Listening to port  ***
 ********************************/
// server.listen(PORT, (error) => {
app.listen(PORT, (error) => {
    if (error)
        console.log(`an Error occurs while starting server on port ${PORT}`);
    else console.log(`Server successfully started on port ${PORT}`);
});
