package interfaces;

public interface SantaInstruction {
    void applyInstruction(String[] instructions);

    int countLights();
    int getTotalBrightness();
}
