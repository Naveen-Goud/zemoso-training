

import java.util.HashMap;
import java.util.Map;

public class hashmap {


    public void hashmapexample(){
        HashMap<Integer, String> hash1= new HashMap<Integer,String>();

        hash1.put(1,"goat");
        hash1.put(2,"tiger");
        hash1.put(3,"wolf");
        hash1.put(4,"cheetah");
        hash1.put(5,"lion");

        String animal= hash1.get(5);
        System.out.println(animal);

        for(Map.Entry<Integer,String> myAnimal: hash1.entrySet()){
            int key=myAnimal.getKey();
            String value =myAnimal.getValue();
            System.out.println(key + ":"+ value);
        }
    }
}
