import java.util.ArrayList;

public class Cart {

    private ArrayList<FoodItem> items;

    public Cart() {
        items = new ArrayList<>();
    }

    public void addFood(FoodItem food) {
        items.add(food);
        System.out.println(food.getName() + " added to cart.");
    }

    public double getTotal() {

        double total = 0;

        for (FoodItem food : items) {
            total = total + food.getPrice();
        }

        return total;
    }

    public void display() {

        System.out.println("\n--------- CART ---------");

        if (items.isEmpty()) {
            System.out.println("Cart is empty.");
            return;
        }

        for (FoodItem food : items) {
            food.display();
        }

        System.out.println("------------------------");
        System.out.println("Total : Rs." + getTotal());
    }
}