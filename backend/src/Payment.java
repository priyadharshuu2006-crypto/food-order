public class Payment {

    int paymentId;
    int orderId;
    double amount;
    String method;

    public Payment(
            int paymentId,
            int orderId,
            double amount,
            String method) {

        this.paymentId = paymentId;
        this.orderId = orderId;
        this.amount = amount;
        this.method = method;
    }

    public void pay() {

        System.out.println("\n--- PAYMENT ---");
        System.out.println("Payment ID: " + paymentId);
        System.out.println("Order ID: " + orderId);
        System.out.println("Amount: Rs." + amount);
        System.out.println("Method: " + method);
        System.out.println("Payment Successful");
    }
}
