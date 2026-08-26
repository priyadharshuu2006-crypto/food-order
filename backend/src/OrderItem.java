public class OrderItem {

    FoodItem food;
    int quantity;

    public OrderItem(FoodItem food, int quantity) {
        this.food = food;
        this.quantity = quantity;
    }

    public double getTotal() {
        return food.price * quantity;
    }
}
