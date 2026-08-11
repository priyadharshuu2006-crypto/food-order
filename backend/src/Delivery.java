public class Delivery {

    private int deliveryId;
    private String status;

    public Delivery(int deliveryId) {
        this.deliveryId = deliveryId;
        this.status = "Not Started";
    }

    public void updateStatus(String newStatus) {

        status = newStatus;

        System.out.println(
            "Delivery Status : " + status
        );
    }
}