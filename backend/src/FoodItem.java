public class FoodItem {

    private int foodId;
    private String name;
    private double price;
    private Category category;

    public FoodItem(
            int foodId,
            String name,
            double price,
            Category category) {

        this.foodId = foodId;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public void display() {
        System.out.println(
                foodId + ". " + name + " - Rs." + price
        );
    }

    public void displayFood() {
        System.out.println("--- FOOD DETAILS ---");
        System.out.println("Food ID: " + foodId);
        System.out.println("Food: " + name);
        System.out.println("Price: Rs." + price);
        System.out.println("Category: " + category.getName());
    }

    public int getFoodId() {
        return foodId;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public Category getCategory() {
        return category;
    }
}