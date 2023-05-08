interface Interface1 {
    void method1();
    void method2();
}

interface Interface2 {
    void method3();
    void method4();
}

interface Interface3 {
    void method5();
    void method6();
}

interface CombinedInterface extends Interface1, Interface2, Interface3 {
    void method7();
}

class ConcreteClass {
    void method8() {
        System.out.println("ConcreteClass method8");
    }
}

class MyClass extends ConcreteClass implements CombinedInterface {
    public void method1() {
        System.out.println("MyClass method1");
    }
    public void method2() {
        System.out.println("MyClass method2");
    }
    public void method3() {
        System.out.println("MyClass method3");
    }
    public void method4() {
        System.out.println("MyClass method4");
    }
    public void method5() {
        System.out.println("MyClass method5");
    }
    public void method6() {
        System.out.println("MyClass method6");
    }
    public void method7() {
        System.out.println("MyClass method7");
    }
}

public class InterfaceExamples {
    static void methodA(Interface1 obj) {
        obj.method1();
        obj.method2();
    }

    static void methodB(Interface2 obj) {
        obj.method3();
        obj.method4();
    }

    static void methodC(Interface3 obj) {
        obj.method5();
        obj.method6();
    }

    static void methodD(CombinedInterface obj) {
        obj.method1();
        obj.method2();
        obj.method3();
        obj.method4();
        obj.method5();
        obj.method6();
        obj.method7();
    }

    public static void main(String[] args) {
        MyClass obj = new MyClass();
        methodA(obj);
        methodB(obj);
        methodC(obj);
        methodD(obj);
    }
}
