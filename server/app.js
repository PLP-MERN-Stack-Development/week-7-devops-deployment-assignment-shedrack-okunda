const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

// Import routes
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/categories");
// const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandling");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = { origin: process.env.ORIGIN, credentials: true };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());

if (process.env.NODE_ENV === "production") {
	app.use(morgan("combined"));
}

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Log requests in development mode
if (process.env.NODE_ENV === "development") {
	app.use((req, res, next) => {
		console.log(`${req.method} ${req.url}`);
		next();
	});
}

// API routes
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
// app.use("/api/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
	res.send("MERN Blog API is running");
});

// Error handling middleware
app.use(errorHandler);

// Connect to MongoDB and start server
connectDB();

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
	console.error("Unhandled Promise Rejection:", err);
	// Close server & exit process
	process.exit(1);
});

module.exports = app;
