const mongoose = require("mongoose");

// Connection to mongoDB
module.exports = async function connection() {
  try {
    const connection_params = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const ConnectionString ="mongodb+srv://princecadstudios:Prince_mongo@cluster0.0t2phst.mongodb.net/AWS?retryWrites=true&w=majority"
      // "mongodb+srv://jordan:jordan123@cluster0.mjdyolp.mongodb.net/interHive"||
      // process.env.mongodbURI;
    await mongoose.connect(ConnectionString, connection_params);
    console.log(`succesfully connected to the database`);
  } catch (error) {
    console.log(error);
    console.log("could not connect to the database");
  }
};
