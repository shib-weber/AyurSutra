const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require('dotenv').config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://ayur-sutra-seven.vercel.app", credentials: true }));


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/patient", require("./routes/patientRoutes"));
app.use("/api/doctor", require("./routes/doctorRoutes"));
app.use("/api/appointment", require("./routes/appointmentRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
