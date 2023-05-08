public class Singleton {
    private String str;

    public static Singleton initializeString(String s) {
        Singleton obj = new Singleton();
        obj.str = s;
        return obj;
    }

    // Non-static method to print the String
    public void printString() {
        System.out.println(str);
    }
}