public class Coupon {

    String code;
    double discount;

    public Coupon(String code, double discount) {
        this.code = code;
        this.discount = discount;
    }

    public double apply(double amount) {
        return amount - (amount * discount / 100);
    }
}
