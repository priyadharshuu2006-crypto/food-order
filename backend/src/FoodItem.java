public class FoodItem {

    int id;
    String name;
    double price;
    Category category;

    public FoodItem(
            int id,
            String name,
            double price,
            Category category) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public void display() {
        System.out.println(
                id + ". " + name +
                " - Rs." + price +
                " - " + category.name
        );
    }
}
