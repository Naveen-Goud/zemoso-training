
public class Main {
    public static void main(String[] args) {
        RodentInheritance[] rodents = {new Mouse(), new Gerbil(), new Hamster()};

        for (RodentInheritance r : rodents) {
            r.eat();
            r.sleep();
            r.run();
            System.out.println();
        }

        CycleClass[] cycles = {new Unicycle(), new Bicycle(), new Tricycle()};

        for (CycleClass c : cycles) {
            // Calling ride() method on all cycles
            c.ride();

            // Downcasting and calling balance() method only on Unicycle and Bicycle
            if (c instanceof Unicycle) {
                ((Unicycle)c).balance();
            } else if (c instanceof Bicycle) {
                ((Bicycle)c).balance();
            }

            System.out.println();
        }

        MyClass obj = new MyClass();
        InterfaceExamples.methodA(obj);
        InterfaceExamples.methodB(obj);
        InterfaceExamples.methodC(obj);
        InterfaceExamples.methodD(obj);
    }
}