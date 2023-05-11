public class VampireNumber {
//    private static boolean isVampire(int num) {
//        int numDigits = (int) Math.log10(num) + 1;
//        if (numDigits % 2 != 0) {
//            return false;
//        }
//        int[] numArr = new int[numDigits];
//        for (int i = 0; i < numDigits; i++) {
//            numArr[i] = num % 10;
//            num /= 10;
//        }
//        int[] factors = new int[4];
//        int factorIndex = 0;
//        for (int i = 1; i < numDigits; i++) {
//            for (int j = 0; j < i; j++) {
//                int x = numArr[i];
//                int y = numArr[j];
//                if (x == 0 && j == 0) {
//                    continue;
//                }
//                factors[factorIndex++] = x * 10 + y;
//                factors[factorIndex++] = y * 10 + x;
//            }
//        }
//        for (int i = 0; i < 4; i++) {
//            if (factors[i] * (num / factors[i]) == num) {
//                return true;
//            }
//        }
//        return false;
//    }

    static boolean isVampire(int m_int) {

        // converting the vampire number to string
        String n_str = Integer.toString(m_int);

        // if no of digits in the number is odd then return false
        if (n_str.length() % 2 == 1) {
            return false;
        }

        // getting the fangs of the number
        Pair<String, String> fangs = getFangs(n_str);
        if (fangs.first.isEmpty() && fangs.second.isEmpty()) {
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int count = 0;
        for (int i = 10; count < 100; i++) {
            if (isVampire(i)) {
                System.out.println(i);
                count++;
            }
        }
    }


}
