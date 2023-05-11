class CycleClass {
    public void ride() {
        System.out.println("Riding a cycle.");
    }
}

class Unicycle extends CycleClass {
    public void balance() {
        System.out.println("Balancing on one wheel.");
    }
}

class Bicycle extends CycleClass {
    public void balance() {
        System.out.println("Balancing on two wheels.");
    }
}

class Tricycle extends CycleClass {}


interface CycleFactory {
    CycleClass createCycle();
}

class UnicycleFactory implements CycleFactory {
    public CycleClass createCycle() {
        return new Unicycle();
    }
}

class BicycleFactory implements CycleFactory {
    public CycleClass createCycle() {
        return new Bicycle();
    }
}

class TricycleFactory implements CycleFactory {
    public CycleClass createCycle() {
        return new Tricycle();
    }
}





