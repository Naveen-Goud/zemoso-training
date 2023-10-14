import interfaces.SantaInstruction;

public class Main {

    public static void main(String[] args) {


        String[] instructions={
                "turn on 887,9 through 959,629",
                "turn on 454,398 through 844,448",
                "turn on 539,243 through 559,965",
                "turn off 370,819 through 676,868",
                "turn off 145,40 through 370,997",
                "turn on 301,3 through 808,453",
                "turn off 351,678 through 951,908",

        };

        SantaInstruction instruction=new SantaInstructionImpl(1000);
        instruction.applyInstruction(instructions);

        System.out.println("total number of lights lit are :"+instruction.countLights());
        System.out.println("total brightness is"+instruction.getTotalBrightness());
    }
}