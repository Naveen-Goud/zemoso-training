import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

class ContainsAllAlphabets {
    private final static Logger LOGGER =
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
    private ContainsAllAlphabets(){
    }

    public static boolean isStringContainingAllAlphabets(String string)
    {
//        if(string.length()<26)
//            return false;
        String upperPhrase=string.toLowerCase();
        String alphabets="abcdefghijklmnopqrstuvwxyz";

        for(int index=0;index<alphabets.length();index+=1)
        {
            char currChar=alphabets.charAt(index);
            if(upperPhrase.indexOf(currChar)==-1)
                return false;
        }
        return true;
    }
}

class Tester {
    private static final Logger LOGGER =
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
    private Tester() {
    }

    public static void tester(String phrase)
    {

        if(ContainsAllAlphabets.isStringContainingAllAlphabets(phrase))

            LOGGER.log(Level.INFO, "String contains a-z alphabets");
        else
            LOGGER.log(Level.INFO, "String does not contain a-z alphabets");
    }
}

public class  Main {

    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        String string =sc.nextLine();
        Tester.tester(string);
    }
}
//Time complexity is O(n)
//Space Complexity is O(1)