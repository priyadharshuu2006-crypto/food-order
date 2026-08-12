public class FoodItem {

    private int foodId;
    private String name;
    private double price;

    public FoodItem(int foodId, String name, double price) {
        this.foodId = foodId;
        this.name = name;
        this.price = price;
    }

    public void display() {
        System.out.println(
            foodId + ". " + name + " - Rs." + price
        );
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}