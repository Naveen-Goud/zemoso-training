import java.util.HashSet;

public class HashSetexample {
    public void hashSet(){
        HashSet<String> hash2=new HashSet<String>();
        hash2.add("red");
        hash2.add("blue");
        hash2.add("violet");
        hash2.add("orange");
        hash2.add("yellow");
        hash2.add("pink");
        for(String str:hash2){
            System.out.println(str);
        }
        if(hash2.contains("pink")){
            System.out.println("contains pink");
        }


        HashSet<String> hash3=new HashSet<String>();
        hash3.add("red");
        hash3.add("blue");
        hash3.add("violet");

        hash3.add("pink");

        HashSet<String> commonItems = new HashSet<String>(hash2);
        commonItems.retainAll(hash3);
        System.out.println(commonItems);

        HashSet<String> differentItems = new HashSet<String>(hash2);
        differentItems.removeAll(hash3);
        System.out.println(differentItems);

    }
}
