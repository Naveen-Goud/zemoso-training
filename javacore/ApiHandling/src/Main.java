import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        try {
            URL url = new URL("https://catfact.ninja/fact");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

            int response = conn.getResponseCode();
            if (response != 200) {
                throw new RuntimeException("HttpResponce:" + response);
            } else {
                StringBuilder informationString = new StringBuilder();
                Scanner scanner = new Scanner(url.openStream());

                while (scanner.hasNext()) {
                    informationString.append(scanner.nextLine());
                }
                scanner.close();
                System.out.println(informationString);


            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}