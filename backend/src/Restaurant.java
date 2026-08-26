public class Restaurant {

    int id;
    String name;
    String location;

    public Restaurant(int id, String name, String location) {
        this.id = id;
        this.name = name;
        this.location = location;
    }

    public void display() {
        System.out.println("\n--- RESTAURANT ---");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Location: " + location);
    }
}
