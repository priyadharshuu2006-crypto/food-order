public class Nutrition {

    private int nutritionId;
    private int foodId;
    private double calories;
    private double protein;
    private double carbohydrates;
    private double fat;

    public Nutrition(int nutritionId, int foodId, double calories,
                     double protein, double carbohydrates, double fat) {

        this.nutritionId = nutritionId;
        this.foodId = foodId;
        this.calories = calories;
        this.protein = protein;
        this.carbohydrates = carbohydrates;
        this.fat = fat;
    }

    public void displayNutrition() {
        System.out.println("Nutrition Information");
        System.out.println("---------------------");
        System.out.println("Food ID: " + foodId);
        System.out.println("Calories: " + calories + " kcal");
        System.out.println("Protein: " + protein + " g");
        System.out.println("Carbohydrates: " + carbohydrates + " g");
        System.out.println("Fat: " + fat + " g");
    }

    public int getNutritionId() {
        return nutritionId;
    }

    public int getFoodId() {
        return foodId;
    }

    public double getCalories() {
        return calories;
    }

    public double getProtein() {
        return protein;
    }

    public double getCarbohydrates() {
        return carbohydrates;
    }

    public double getFat() {
        return fat;
    }
}
