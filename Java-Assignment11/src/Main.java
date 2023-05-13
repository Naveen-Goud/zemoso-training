

import java.io.File;
        import java.io.FileWriter;
        import java.io.IOException;
        import java.util.HashMap;
        import java.util.Map;
        import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        if (args.length == 0) {
            System.err.println("Please provide the file name as a command line argument.");
            return;
        }
        String fileName = args[0];
        Map<Character, Integer> charCounts = new HashMap<>();
        try (Scanner scanner = new Scanner(new File(fileName))) {
            while (scanner.hasNext()) {
                String line = scanner.nextLine();
                for (char c : line.toCharArray()) {
                    charCounts.put(c, charCounts.getOrDefault(c, 0) + 1);
                }
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            return;
        }
        try (FileWriter writer = new FileWriter("char_counts.txt")) {
            for (Map.Entry<Character, Integer> entry : charCounts.entrySet()) {
                writer.write(entry.getKey() + ": " + entry.getValue() + "\n");
            }
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
        System.out.println("Character counts saved to char_counts.txt");
    }
}
