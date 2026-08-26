public class Notification {

    String message;

    public Notification(String message) {
        this.message = message;
    }

    public void send() {
        System.out.println(
                "\nNotification: " + message
        );
    }
}
