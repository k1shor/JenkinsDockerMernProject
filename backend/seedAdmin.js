require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/userModel");

const seedAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DATABASE);

        console.log("MongoDB connected");

        // Check if admin already exists
        const existingAdmin = await User.findOne({
            role: { $in: [1, 2] }
        });

        if (existingAdmin) {
            console.log("Admin account already exists.");
            console.log("Username:", existingAdmin.username);
            console.log("Email:", existingAdmin.email);

            await mongoose.connection.close();
            process.exit(0);
        }

        // Admin credentials
        const username = "admin";
        const email = "admin@example.com";
        const password = "Admin@123";

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create admin
        const admin = await User.create({
            username,
            email,
            password: hashedPassword,
            isVerified: true,
            role: 1
        });

        console.log("--------------------------------");
        console.log("Admin created successfully!");
        console.log("--------------------------------");
        console.log("Username:", admin.username);
        console.log("Email:", admin.email);
        console.log("Password:", password);
        console.log("Role:", admin.role);
        console.log("--------------------------------");

        await mongoose.connection.close();

        process.exit(0);

    } catch (error) {

        console.error("Error creating admin:", error);

        await mongoose.connection.close();

        process.exit(1);
    }
};

seedAdmin();