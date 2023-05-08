

public class Main {
    public static void main(String[] args) {

        Data dataObj = new Data();


        dataObj.printValues();
        dataObj.printLocalVariables();

        Singleton singletonObj = Singleton.initializeString("Hello World");

        singletonObj.printString();
    }
}