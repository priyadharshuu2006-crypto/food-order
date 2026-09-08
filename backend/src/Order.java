public class Order {

    int orderId;
    User user;
    double total;

    public Order(
            int orderId,
            User user,
            double total) {

        this.orderId = orderId;
        this.user = user;
        this.total = total;
    }

    public void display() {

        System.out.println();
        System.out.println("--- ORDER DETAILS ---");
        System.out.println("Order ID: " + orderId);
        System.out.println("Customer: " + user.name);
        System.out.println("Total Amount: Rs." + total);
        System.out.println("Status: Order Placed");
    }
}