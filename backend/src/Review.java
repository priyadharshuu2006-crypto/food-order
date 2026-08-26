public class Review {

    String userName;
    String comment;

    public Review(String userName, String comment) {
        this.userName = userName;
        this.comment = comment;
    }

    public void display() {

        System.out.println("\n--- REVIEW ---");
        System.out.println("User: " + userName);
        System.out.println("Review: " + comment);
    }
}
