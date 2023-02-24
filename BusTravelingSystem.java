import java.util.*;

public class BusTravelingSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of bus stops: ");
        int n = scanner.nextInt();

        int[][] adjMatrix = new int[n][n];

        System.out.println("Enter the connections and distances between bus stops: ");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                adjMatrix[i][j] = scanner.nextInt();
            }
        }

        System.out.print("Enter the source bus stop: ");
        int source = scanner.nextInt();
        System.out.print("Enter the destination bus stop: ");
        int destination = scanner.nextInt();

        int[] distances = new int[n];
        boolean[] visited = new boolean[n];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[source] = 0;

        for (int i = 0; i < n - 1; i++) {
            int minDist = Integer.MAX_VALUE;
            int minIndex = -1;

            for (int j = 0; j < n; j++) {
                if (!visited[j] && distances[j] < minDist) {
                    minDist = distances[j];
                    minIndex = j;
                }
            }

            visited[minIndex] = true;

            for (int j = 0; j < n; j++) {
                int distance = adjMatrix[minIndex][j];
                if (distance > 0 && !visited[j] && distances[minIndex] != Integer.MAX_VALUE &&
                        distances[minIndex] + distance < distances[j]) {
                    distances[j] = distances[minIndex] + distance;
                }
            }
        }

        System.out
                .println("The shortest path from " + source + " to " + destination + " is: " + distances[destination]);
    }
}