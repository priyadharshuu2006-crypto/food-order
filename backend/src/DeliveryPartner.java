public class DeliveryPartner {

    int id;
    String name;
    String phone;

    public DeliveryPartner(
            int id,
            String name,
            String phone) {

        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    public void display() {

        System.out.println("\n--- DELIVERY PARTNER ---");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Phone: " + phone);
    }
}
