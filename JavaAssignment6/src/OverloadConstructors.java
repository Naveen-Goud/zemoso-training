
public class OverloadConstructors {
    private int num;
    private String str;

    public OverloadConstructors(int num) {
        this.num = num;
        this.str = "default";
    }

    public OverloadConstructors(int num, String str) {
        this(num);
        this.str = str;
    }
}