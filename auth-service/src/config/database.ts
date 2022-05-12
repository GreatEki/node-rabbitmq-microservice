import mongoose from "mongoose";

const connectAuthDB = () => {
  try {
    const conn = mongoose.connect(`${process.env.AUTHDB_URI}`, {
      retryWrites: true,
      w: "majority",
    });

    console.log("Auth Service Database connected");
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

export default connectAuthDB;
