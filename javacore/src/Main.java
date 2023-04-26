import java.util.HashSet;
import java.util.Scanner;

import Example1.ExcetionHandling;
import org.w3c.dom.ls.LSOutput;
import vehicle.car;
class Loops{
    static void ifloop(int i){


        if(i>5){
            System.out.println("i less than 2");
        }else{
            System.out.println("i is greater than 2");
        }

    }
}

class Arrays {
    public static void arrays(){
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter the size of the array");
        int arraySize= scanner.nextInt();
        int[] array=new int[arraySize];
        System.out.println("enter the Array elements");

        for (int i=0;i<arraySize;i++){
            array[i]=scanner.nextInt();
        }

        System.out.println("array elements are");
        for (int i=0;i<arraySize;i++){
            System.out.println(array[i]);
        }
    }
}

class  ConstructorClass{
    int val;
    public ConstructorClass(){
        System.out.println("first constructor");
    }
    public ConstructorClass(int val){
        this();
        this.val=val;
        System.out.println("second constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = 6;
        while (number <= 36) {
            System.out.println("Hello world!" + number);
            number += 6;
        }
//        loops example
//        System.out.println("enter the i value");
//        int i = scanner.nextInt();

//        Loops l1= new Loops();
//        l1.ifloop(i);
//

//        arrays example
//        Arrays a1= new Arrays();
//        a1.arrays();

//   package example
//        car car=new car();
//        car.cars();
//        System.out.println(car);

//        constructor example
//        ConstructorClass c1=new ConstructorClass();
//        new ConstructorClass(5);
//         animal cat=new animal();
//        cat.cat();
//        cat.dog();
//
////        example for exception handling
//        ExcetionHandling e=new ExcetionHandling();
//        e.exceptionhandling();

//        lambda example(anyomous function)
//        lambda car=new lambda();
//        car.drive(new functionalInterface() {
//            @Override
//            public void start() {
//                System.out.println("start the drive...");
//            }
//        });
//
//        car.drive(()->{System.out.println("start driving");});
//

//        arraylist example
//        ArrayListExample a2=new ArrayListExample();
//        a2.arraylistexample();

//        hashmap example
//        hashmap h1= new hashmap();
//        h1.hashmapexample();

//        treemap and linkedhashmap example
//        TreeMapandLinkedHashMap n1= new TreeMapandLinkedHashMap();
//         n1.treeMap();

//        hashset examp-le
        HashSetexample e1= new HashSetexample();
        e1.hashSet();
    }
}

