public class Rating {

    int value;

    public Rating(int value) {
        this.value = value;
    }

    public void display() {
        System.out.println("Rating: " + value + "/5");
    }
}
