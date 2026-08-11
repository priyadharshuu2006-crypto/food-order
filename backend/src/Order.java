public class Order {

    private int orderId;
    private User user;
    private Restaurant restaurant;
    private double amount;

    public Order(int orderId, User user,
                 Restaurant restaurant, double amount) {

        this.orderId = orderId;
        this.user = user;
        this.restaurant = restaurant;
        this.amount = amount;
    }

    public void display() {

        System.out.println("\n--------- ORDER ---------");
        System.out.println("Order ID   : " + orderId);
        System.out.println("Customer   : " + user.getName());
        System.out.println("Restaurant : " + restaurant.getName());
        System.out.println("Amount     : Rs." + amount);
        System.out.println("Status     : Order Placed");
    }
}