abstract class RodentInheritance {
    public abstract void eat();
    public abstract void sleep();
    public abstract void run();

    public RodentInheritance() {
        System.out.println("A new Rodent is created.");
    }
}

class Mouse extends RodentInheritance {
    public void eat() {
        System.out.println("The mouse is eating.");
    }

    public void sleep() {
        System.out.println("The mouse is sleeping.");
    }

    public void run() {
        System.out.println("The mouse is running.");
    }

    public Mouse() {
        System.out.println("A new Mouse is created.");
    }
}

class Gerbil extends RodentInheritance {
    public void eat() {
        System.out.println("The gerbil is eating.");
    }

    public void sleep() {
        System.out.println("The gerbil is sleeping.");
    }

    public void run() {
        System.out.println("The gerbil is running.");
    }

    public Gerbil() {
        System.out.println("A new Gerbil is created.");
    }
}

class Hamster extends RodentInheritance {
    public void eat() {
        System.out.println("The hamster is eating.");
    }

    public void sleep() {
        System.out.println("The hamster is sleeping.");
    }

    public void run() {
        System.out.println("The hamster is running.");
    }

    public Hamster() {
        System.out.println("A new Hamster is created.");
    }
}

