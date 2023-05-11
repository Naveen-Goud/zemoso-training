public class Main {
    public static void main(String[] args) {
        ExampleClass[] arr = new ExampleClass[5];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = new ExampleClass("object " + i);
        }
    }
}