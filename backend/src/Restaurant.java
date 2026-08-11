public class Restaurant {

    private int restaurantId;
    private String name;
    private String location;

    public Restaurant(int restaurantId, String name, String location) {
        this.restaurantId = restaurantId;
        this.name = name;
        this.location = location;
    }

    public void display() {
        System.out.println("\n--------- RESTAURANT ---------");
        System.out.println("Restaurant ID : " + restaurantId);
        System.out.println("Name          : " + name);
        System.out.println("Location      : " + location);
    }

    public String getName() {
        return name;
    }
}