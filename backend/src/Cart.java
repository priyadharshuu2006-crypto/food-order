import java.util.ArrayList;

public class Cart {

    ArrayList<OrderItem> items =
            new ArrayList<OrderItem>();

    public void addItem(FoodItem food, int quantity) {

        items.add(new OrderItem(food, quantity));

        System.out.println(
                food.name + " added to cart."
        );
    }

    public boolean isEmpty() {
        return items.isEmpty();
    }

    public double getTotal() {

        double total = 0;

        for (OrderItem item : items) {
            total = total + item.getTotal();
        }

        return total;
    }

    public void display() {

        System.out.println("\n--- CART ---");

        if (items.isEmpty()) {
            System.out.println("Cart is empty.");
            return;
        }

        for (OrderItem item : items) {
            System.out.println(
                    item.food.name +
                    " x " + item.quantity +
                    " = Rs." + item.getTotal()
            );
        }

        System.out.println("Total: Rs." + getTotal());
    }
}
