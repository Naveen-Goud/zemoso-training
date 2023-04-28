package Example1;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExcetionHandling
{ public  void exceptionhandling(){
    File file= new File("src/example.txt");
    try{
        Scanner readFile= new Scanner(file);
        System.out.println(readFile.toString());

    }catch(FileNotFoundException e){
        System.out.println("file not found" + file.toString());
    }
}

}
