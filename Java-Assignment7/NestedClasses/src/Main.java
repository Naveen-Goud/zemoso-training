 class OuterClass {

    private int outerInt;

    public OuterClass(int outerInt) {
        this.outerInt = outerInt;
    }

    public void outerMethod() {
        System.out.println("Outer method called with outerInt: " + outerInt);
    }

    public class InnerClassWithArg {

        private int innerInt;

        public InnerClassWithArg(int innerInt) {
            this.innerInt = innerInt;
        }

        public void innerMethod() {
            System.out.println("Inner method called with innerInt: " + innerInt);
        }
    }

}

class SecondOuterClass {

    public class InnerClassInherited extends OuterClass.InnerClassWithArg {

        public InnerClassInherited(OuterClass outer, int innerInt) {
            outer.super(innerInt);
            // Here we call the constructor of the super class InnerClassWithArg
            // and pass it an argument of type int.
            // We also call the constructor of the super class OuterClass and
            // pass it an instance of the outer class (which is necessary
            // when creating an inner class of a non-static nested class).
        }

        public void inheritedMethod() {
            System.out.println("Inherited method called");
        }
    }

}

public class  Main{
    // Usage example:
    public static void main(String[] args) {
        OuterClass outer = new OuterClass(10);
        OuterClass.InnerClassWithArg inner1 = outer.new InnerClassWithArg(20);
        inner1.innerMethod();

        SecondOuterClass secondOuter = new SecondOuterClass();
        SecondOuterClass.InnerClassInherited inner2 = secondOuter.new InnerClassInherited(outer, 30);
        inner2.innerMethod();
        inner2.inheritedMethod();
    }
}

