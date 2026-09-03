public class ScheduledOrder {

    private int scheduleId;
    private int orderId;
    private String scheduledDate;
    private String scheduledTime;
    private String status;

    public ScheduledOrder(int scheduleId, int orderId,
                          String scheduledDate, String scheduledTime,
                          String status) {

        this.scheduleId = scheduleId;
        this.orderId = orderId;
        this.scheduledDate = scheduledDate;
        this.scheduledTime = scheduledTime;
        this.status = status;
    }

    public void displaySchedule() {
        System.out.println("Scheduled Order");
        System.out.println("----------------");
        System.out.println("Schedule ID: " + scheduleId);
        System.out.println("Order ID: " + orderId);
        System.out.println("Date: " + scheduledDate);
        System.out.println("Time: " + scheduledTime);
        System.out.println("Status: " + status);
    }

    public int getScheduleId() {
        return scheduleId;
    }

    public int getOrderId() {
        return orderId;
    }

    public String getScheduledDate() {
        return scheduledDate;
    }

    public String getScheduledTime() {
        return scheduledTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
