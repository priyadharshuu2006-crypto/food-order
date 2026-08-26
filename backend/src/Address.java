public class Address {

    int id;
    String address;
    String city;
    String pincode;

    public Address(
            int id,
            String address,
            String city,
            String pincode) {

        this.id = id;
        this.address = address;
        this.city = city;
        this.pincode = pincode;
    }

    public void display() {

        System.out.println("\n--- ADDRESS ---");
        System.out.println("Address: " + address);
        System.out.println("City: " + city);
        System.out.println("Pincode: " + pincode);
    }
}
