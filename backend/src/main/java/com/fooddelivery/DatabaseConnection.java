package com.fooddelivery;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection {

    public static Connection connect() {
        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/food_delivery",
                "root",
                "priya@123"
            );

            System.out.println("Database connection successful.");
            return con;

        } catch (Exception e) {
            System.out.println("Database connection failed.");
            e.printStackTrace();
            return null;
        }
    }
}