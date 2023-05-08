class ExceptionA extends Exception {
    // custom implementation for Exception A
}

class ExceptionB extends Exception {
    // custom implementation for Exception B
}

class ExceptionC extends Exception {
    // custom implementation for Exception C
}

class MyClass {
    public void myMethod(int n) throws ExceptionA, ExceptionB, ExceptionC {
        if (n == 0) {
            throw new ExceptionA();
        } else if (n == 1) {
            throw new ExceptionB();
        } else if (n == 2) {
            throw new ExceptionC();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        try {
            obj.myMethod(0);
            obj.myMethod(1);
            obj.myMethod(2);
        } catch (Exception e) {
            System.out.println("Exception caught: " + e);
        } finally {
            System.out.println("Finally block executed.");
        }
    }
}
