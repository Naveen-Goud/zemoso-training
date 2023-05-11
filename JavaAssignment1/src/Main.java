import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {

        Scanner scanner = new Scanner(System.in);
        String searchfile;

        do {
            System.out.println("enter the search file name(enter the quit to exit)");
            searchfile=scanner.nextLine();
            if (searchfile.equalsIgnoreCase("quit")) {
                    break;
                }

            File folder = new File("C:/Users/naveen goud/Documents");
            File[] flist = folder.listFiles();
            int flag = 0;
            for (int i = 0; i < flist.length; i++) {
                String filename = flist[i].getName();
                if (filename.equalsIgnoreCase(searchfile)) {
                    System.out.println(filename + " found");
                    String path = flist[i].getAbsolutePath();
                    System.out.println(path);
                    flag = 1;
                }
            }
            if (flag == 0) {
                System.out.println("File not found");
            }
        }while(true);
       scanner.close();
    }
}