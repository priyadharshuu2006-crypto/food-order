import java.util.ArrayList;

public class Cart {

    private ArrayList<OrderItem> items;

    public Cart() {
        items = new ArrayList<>();
    }

    public void addItem(FoodItem food, int quantity) {

        OrderItem item = new OrderItem(food, quantity);
        items.add(item);

        System.out.println(
                food.getName()
                + " added to cart."
        );
    }

    public boolean isEmpty() {
        return items.isEmpty();
    }

    public double getTotal() {

        double total = 0;

        for (OrderItem item : items) {
            total += item.getTotal();
        }

        return total;
    }

    public void display() {

        if (items.isEmpty()) {
            System.out.println("Cart is empty.");
            return;
        }

        System.out.println("--- CART ---");

        for (OrderItem item : items) {
            item.display();
        }

        System.out.println("----------------");
        System.out.println("Total: Rs." + getTotal());
    }
}