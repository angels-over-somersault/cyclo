// ============================================================================

// Load '.env' only in Development environment:
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./.env" });
}

// ============================================================================
// ===========<<< Configure Port and Dependencies >>>==========================
// ============================================================================
const port = process.env.PORT || 8000;
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");

// ============================================================================
// ===========<<< Configure Express Application >>>============================
// ============================================================================

// Set 'view engine' to use 'ejs' and directories:
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(express.static("public"));

// Set Express to use 'expressLayouts'
app.use(expressLayouts);

// ============================================================================
// ===========<<< Configure MongoDB  >>>=======================================
// ============================================================================

mongoose.connect(process.env.CYCLOAPP_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

// ============================================================================
// ===========<<< Configure Routes  >>>========================================
// ============================================================================

// Link to 'routes/index.js' routes:
app.use("/", indexRouter);

// ============================================================================
// ===========<<< SetUp Server  >>>===========================================
// ============================================================================

// Setup Server and Listening Port:
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});

// ============================================================================
