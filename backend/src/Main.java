import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        
        User user = new User(
                1,
                "Priya",
                "priya@gmail.com"
        );

        // Admin - your Admin.java currently accepts 2 arguments
        Admin admin = new Admin(
                1,
                "Admin"
        );

        // Restaurant
        Restaurant restaurant = new Restaurant(
                101,
                "ABC Restaurant",
                "Trichy"
        );

        // Category
        Category category = new Category(
                1,
                "Indian Food"
        );

        // Food items
        FoodItem biryani = new FoodItem(
                1,
                "Chicken Biryani",
                150,
                category
        );

        FoodItem dosa = new FoodItem(
                2,
                "Dosa",
                50,
                category
        );

        // Cart
        Cart cart = new Cart();

        int choice = 0;

        while (choice != 17) {

            System.out.println();
            System.out.println("================================");
            System.out.println("   FOOD ORDER & DELIVERY");
            System.out.println("================================");
            System.out.println("1. User Details");
            System.out.println("2. Admin Details");
            System.out.println("3. Restaurant Details");
            System.out.println("4. Food Menu");
            System.out.println("5. Add Food to Cart");
            System.out.println("6. View Cart");
            System.out.println("7. Place Order");
            System.out.println("8. Payment");
            System.out.println("9. Delivery");
            System.out.println("10. Search Food");
            System.out.println("11. Apply Coupon");
            System.out.println("12. Rating");
            System.out.println("13. Review");
            System.out.println("14. Notification");
            System.out.println("15. Nutrition Information");
            System.out.println("16. Schedule Food Order");
            System.out.println("17. Exit");

            System.out.println("================================");

            System.out.print("Enter your choice: ");

            if (!sc.hasNextInt()) {
                System.out.println("Please enter a number.");
                sc.next();
                continue;
            }

            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    user.display();
                    break;

                case 2:
                    admin.display();
                    break;

                case 3:
                    restaurant.display();
                    break;

                case 4:
                    System.out.println();
                    System.out.println("--- FOOD MENU ---");
                    biryani.display();
                    dosa.display();
                    break;

                case 5:

                    System.out.println();
                    System.out.println("1. Chicken Biryani - Rs.150");
                    System.out.println("2. Dosa - Rs.50");

                    System.out.print("Select food: ");

                    int foodChoice = sc.nextInt();

                    System.out.print("Enter quantity: ");

                    int quantity = sc.nextInt();

                    if (quantity <= 0) {
                        System.out.println(
                                "Quantity must be greater than 0."
                        );
                    }
                    else if (foodChoice == 1) {

                        cart.addItem(
                                biryani,
                                quantity
                        );

                    }
                    else if (foodChoice == 2) {

                        cart.addItem(
                                dosa,
                                quantity
                        );

                    }
                    else {
                        System.out.println("Invalid food choice.");
                    }

                    break;

                case 6:

                    cart.display();

                    break;

                case 7:

                    if (cart.isEmpty()) {

                        System.out.println(
                                "Cart is empty. Add food first."
                        );

                    }
                    else {

                        Order order = new Order(
                                1001,
                                user,
                                cart.getTotal()
                        );

                        order.display();
                    }

                    break;

                case 8:

                    if (cart.isEmpty()) {

                        System.out.println(
                                "Cart is empty."
                        );

                    }
                    else {

                        Payment payment = new Payment(
                                5001,
                                1001,
                                cart.getTotal(),
                                "Cash on Delivery"
                        );

                        payment.pay();
                    }

                    break;

                case 9:

                    Delivery delivery = new Delivery(
                            7001,
                            1001,
                            "Preparing"
                    );

                    delivery.updateStatus(
                            "Out for Delivery"
                    );

                    delivery.display();

                    break;

                case 10:

                    System.out.print(
                            "Enter food name to search: "
                    );

                    String foodName = sc.nextLine();

                    Search search = new Search();

                    search.searchFood(foodName);

                    break;

                case 11:

                    if (cart.isEmpty()) {

                        System.out.println(
                                "Cart is empty."
                        );

                    }
                    else {

                        Coupon coupon = new Coupon(
                                "FOOD10",
                                10
                        );

                        double total = cart.getTotal();

                        double finalAmount =
                                coupon.apply(total);

                        System.out.println(
                                "Original Amount: Rs."
                                        + total
                        );

                        System.out.println(
                                "Discount: 10%"
                        );

                        System.out.println(
                                "Final Amount: Rs."
                                        + finalAmount
                        );
                    }

                    break;

                case 12:

                    System.out.print(
                            "Enter rating (1-5): "
                    );

                    int ratingValue = sc.nextInt();

                    if (ratingValue >= 1 &&
                        ratingValue <= 5) {

                        Rating rating =
                                new Rating(ratingValue);

                        rating.display();

                    }
                    else {

                        System.out.println(
                                "Rating must be between 1 and 5."
                        );
                    }

                    break;

                case 13:

                    System.out.print(
                            "Enter your review: "
                    );

                    String comment = sc.nextLine();

                    Review review = new Review(
                            user.name,
                            comment
                    );

                    review.display();

                    break;

                case 14:

                    Notification notification =
                            new Notification(
                                    "Your order is out for delivery."
                            );

                    notification.send();

                    break;
                    case 15:
                        System.out.println();
                        System.out.println("---NUTRITION INFORMATION---");
                        Nutrition nutrition=new Nutrition(1,1,450,18,55,15);
                        nutrition.displayNutrition();
                        break;
                        case 16:
                            System.out.println();
                            System.out.println("---SCHEDULE FOOD ORDER---");
                            System.out.print("Enter order date(YYYY-MM-DD):");
                            String date=sc.nextLine();
                            System.out.print("Enter order time:");
                            String time=sc.nextLine();
                            ScheduledOrder scheduledOrder= new ScheduledOrder(1,1001,date,time,"Scheduled");

                            scheduledOrder.displaySchedule();
                            break;
                case 17:

                    System.out.println();
                    System.out.println(
                            "Thank you for using Food Delivery!"
                    );

                    break;

                default:

                    System.out.println(
                            "Invalid choice."
                    );
            }
        }

        sc.close();
    }
}
