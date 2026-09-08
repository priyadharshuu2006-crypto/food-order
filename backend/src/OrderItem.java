public class OrderItem {

    private FoodItem food;
    private int quantity;

    public OrderItem(FoodItem food, int quantity) {
        this.food = food;
        this.quantity = quantity;
    }

    public double getTotal() {
        return food.getPrice() * quantity;
    }

    public void display() {
        System.out.println(
                food.getName()
                + " x "
                + quantity
                + " = Rs."
                + getTotal()
        );
    }

    public FoodItem getFood() {
        return food;
    }

    public int getQuantity() {
        return quantity;
    }
}