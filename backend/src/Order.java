public class Order {

    int orderId;
    User user;
    double amount;
    String status;

    public Order(
            int orderId,
            User user,
            double amount) {

        this.orderId = orderId;
        this.user = user;
        this.amount = amount;
        this.status = "Order Placed";
    }

    public void display() {

        System.out.println("\n--- ORDER ---");
        System.out.println("Order ID: " + orderId);
        System.out.println("Customer: " + user.name);
        System.out.println("Amount: Rs." + amount);
        System.out.println("Status: " + status);
    }
}
