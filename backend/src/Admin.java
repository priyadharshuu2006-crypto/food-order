public class Admin {

    int id;
    String name;
    String email;

    public Admin(int id, String name) {
        this.id = id;
        this.name = name;
        this.email = "admin@gmail.com";
    }

    public void display() {
        System.out.println("\n--- ADMIN ---");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
    }
}
