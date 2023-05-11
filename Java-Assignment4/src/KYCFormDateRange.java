import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class KYCFormDateRange {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();

        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split(" ");
            LocalDate signupDate = LocalDate.parse(input[0], DateTimeFormatter.ofPattern("dd-MM-yyyy"));
            LocalDate currentDate = LocalDate.parse(input[1], DateTimeFormatter.ofPattern("dd-MM-yyyy"));

            LocalDate anniversaryThisYear = signupDate.withYear(currentDate.getYear());

            if (anniversaryThisYear.isAfter(currentDate)) {
                anniversaryThisYear = anniversaryThisYear.minusYears(1);
            }

            LocalDate startDate = anniversaryThisYear.minusDays(30);
            LocalDate endDate = anniversaryThisYear.plusDays(30);

            if (endDate.isBefore(currentDate)) {
                System.out.println(startDate.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")) + " " +
                        endDate.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
            } else if (startDate.isBefore(currentDate)) {
                System.out.println(startDate.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")) + " " +
                        currentDate.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
            } else {
                System.out.println("No range");
            }
        }
    }
}
