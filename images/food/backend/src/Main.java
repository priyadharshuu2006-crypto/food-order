import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    static Scanner scanner = new Scanner(System.in);
    static ArrayList<String> foodNames = new ArrayList<>();
    static ArrayList<Double> foodPrices = new ArrayList<>();

    public static void main(String[] args) {

        int choice;

        System.out.println("======================================");
        System.out.println("       FOOD DELIVERY PLATFORM");
        System.out.println("======================================");

        do {
            System.out.println();
            System.out.println("1. User Details");
            System.out.println("2. Restaurants");
            System.out.println("3. Food Menu");
            System.out.println("4. Add Food to Cart");
            System.out.println("5. View Cart");
            System.out.println("6. Place Order");
            System.out.println("7. Payment");
            System.out.println("8. Delivery Status");
            System.out.println("9. Exit");

            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {

                case 1:
                    userDetails();
                    break;

                case 2:
                    restaurants();
                    break;

                case 3:
                    foodMenu();
                    break;

                case 4:
                    addFood();
                    break;

                case 5:
                    viewCart();
                    break;

                case 6:
                    placeOrder();
                    break;

                case 7:
                    payment();
                    break;

                case 8:
                    delivery();
                    break;

                case 9:
                    System.out.println("Thank you!");
                    break;

                default:
                    System.out.println("Invalid choice!");
            }

        } while (choice != 9);

        scanner.close();
    }

    static void userDetails() {

        System.out.println("\n--------- USER DETAILS ---------");
        System.out.println("User ID : 1");
        System.out.println("Name    : Priya");
        System.out.println("Email   : priya@gmail.com");
        System.out.println("Phone   : 9876543210");
    }

    static void restaurants() {

        System.out.println("\n--------- RESTAURANTS ---------");
        System.out.println("1. Food Palace - Trichy");
        System.out.println("2. Spice Kitchen - Trichy");
        System.out.println("3. Tasty Corner - Trichy");
    }

    static void foodMenu() {

        System.out.println("\n----------- FOOD MENU -----------");
        System.out.println("1. Chicken Biryani - Rs.180");
        System.out.println("2. Pizza           - Rs.250");
        System.out.println("3. Burger          - Rs.120");
        System.out.println("4. Dosa            - Rs.80");
    }

    static void addFood() {

        foodMenu();

        System.out.print("Enter food number: ");
        int choice = scanner.nextInt();

        if (choice == 1) {
            foodNames.add("Chicken Biryani");
            foodPrices.add(180.0);
            System.out.println("Chicken Biryani added to cart.");
        }
        else if (choice == 2) {
            foodNames.add("Pizza");
            foodPrices.add(250.0);
            System.out.println("Pizza added to cart.");
        }
        else if (choice == 3) {
            foodNames.add("Burger");
            foodPrices.add(120.0);
            System.out.println("Burger added to cart.");
        }
        else if (choice == 4) {
            foodNames.add("Dosa");
            foodPrices.add(80.0);
            System.out.println("Dosa added to cart.");
        }
        else {
            System.out.println("Invalid food choice!");
        }
    }

    static void viewCart() {

        System.out.println("\n------------- CART -------------");

        if (foodNames.isEmpty()) {
            System.out.println("Cart is empty.");
            return;
        }

        double total = 0;

        for (int i = 0; i < foodNames.size(); i++) {

            System.out.println(
                (i + 1) + ". " +
                foodNames.get(i) +
                " - Rs." +
                foodPrices.get(i)
            );

            total = total + foodPrices.get(i);
        }

        System.out.println("--------------------------------");
        System.out.println("Total Amount: Rs." + total);
    }

    static double getTotal() {

        double total = 0;

        for (double price : foodPrices) {
            total = total + price;
        }

        return total;
    }

    static void placeOrder() {

        if (foodNames.isEmpty()) {
            System.out.println("Cart is empty. Add food first.");
            return;
        }

        System.out.println("\n----------- ORDER -----------");
        System.out.println("Order ID : 1001");
        System.out.println("Customer : Priya");
        System.out.println("Amount   : Rs." + getTotal());
        System.out.println("Order placed successfully!");
    }

    static void payment() {

        if (foodNames.isEmpty()) {
            System.out.println("Please add food first.");
            return;
        }

        System.out.println("\n----------- PAYMENT -----------");
        System.out.println("1. UPI");
        System.out.println("2. Card");
        System.out.println("3. Cash on Delivery");

        System.out.print("Choose payment method: ");
        int choice = scanner.nextInt();

        if (choice == 1) {
            System.out.println("UPI Payment Successful!");
        }
        else if (choice == 2) {
            System.out.println("Card Payment Successful!");
        }
        else if (choice == 3) {
            System.out.println("Cash on Delivery Selected!");
        }
        else {
            System.out.println("Invalid payment choice!");
        }
    }

    static void delivery() {

        System.out.println("\n------- DELIVERY STATUS -------");
        System.out.println("Order Confirmed");
        System.out.println("Food Preparing");
        System.out.println("Out for Delivery");
        System.out.println("Delivered");
    }
}