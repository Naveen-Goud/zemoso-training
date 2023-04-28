import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;

public class TreeMapandLinkedHashMap {
 public void treeMap(){
     LinkedHashMap<Integer,String> LinkedHashMap= new LinkedHashMap<>();
     TreeMap<Integer,String> TreeMap = new TreeMap<>();
      sortedMap(TreeMap);
      sortedMap(LinkedHashMap);
 }
 public void sortedMap(Map<Integer,String> hash){

     hash.put(1,"goat");
     hash.put(4,"tiger");
     hash.put(5,"wolf");
     hash.put(2,"cheetah");
     hash.put(3,"lion");

     for(Integer myNumber: hash.keySet()){

         String value =hash.get(myNumber);
         System.out.println(myNumber + ":"+ value);
 }}
}
