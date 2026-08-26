public class Delivery {

    int deliveryId;
    int orderId;
    String status;

    public Delivery(
            int deliveryId,
            int orderId,
            String status) {

        this.deliveryId = deliveryId;
        this.orderId = orderId;
        this.status = status;
    }

    public void updateStatus(String status) {
        this.status = status;
    }

    public void display() {

        System.out.println("\n--- DELIVERY ---");
        System.out.println("Delivery ID: " + deliveryId);
        System.out.println("Order ID: " + orderId);
        System.out.println("Status: " + status);
    }
}