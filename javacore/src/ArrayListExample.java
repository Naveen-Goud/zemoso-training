import java.util.ArrayList;

public class ArrayListExample {
    public void arraylistexample(){
        ArrayList<Integer> a1=new ArrayList<Integer>();
        a1.add(20);
        a1.add(30);
        a1.add(40);
        a1.add(50);
        System.out.println("the arraylist values are");

        for(int i=0;i<a1.size();i++){
            System.out.println(a1.get(i));
        }
        a1.remove(2);
        a1.add(450);
        for (Integer val:a1){
            System.out.println(val);
        }
    }
}
