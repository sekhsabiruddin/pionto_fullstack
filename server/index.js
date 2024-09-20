const express = require("express");
const { noteRoutes } = require("./routes/notes");
const { dbConnection } = require("./config/dbConnect");
const { Note } = require("./models/note");
const app = express();
const cors = require("cors");
app.use(express.json());
//====================Any domain can acesss this =============
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api", noteRoutes);
Note.sync();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
