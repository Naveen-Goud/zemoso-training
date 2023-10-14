import interfaces.LightMethods;
import interfaces.SantaInstruction;

public class SantaInstructionImpl implements SantaInstruction {

    private int[][] lights;
    private int[][] bulbs;
    private int totalBrightness;
    LightMethods lightMethods;
    public  SantaInstructionImpl(int totalSize){
        lights=new int[totalSize][totalSize];
        bulbs= new int[totalSize][totalSize];
        lightMethods=new LightMethodImpl();
        totalBrightness=0;
    }
    @Override
    public void applyInstruction(String[] instructions) {

        for(String instruction: instructions){
            String[] parts=instruction.split(" ");

            if(parts[0].equals("turn")){
                int startX=Integer.parseInt(parts[2].split(",")[0]);
                int startY=Integer.parseInt(parts[2].split(",")[1]);
                int endX=Integer.parseInt(parts[4].split(",")[0]);
                int endY=Integer.parseInt(parts[4].split(",")[1]);

                if(parts[1].equals("on")){
                    lights= lightMethods.lightOn(lights,startX,startY,endX,endY, bulbs);
                }else if(parts[1].equals("off")){
                    lights= lightMethods.lightsOff(lights,startX,startY,endX,endY);
                }
            } else if (parts[0].equals("toggle")) {
                int startX=Integer.parseInt(parts[1].split(",")[0]);
                int startY=Integer.parseInt(parts[1].split(",")[1]);
                int endX=Integer.parseInt(parts[3].split(",")[0]);
                int endY=Integer.parseInt(parts[3].split(",")[1]);
                lights= lightMethods.toggle(lights,startX,startY,endX,endY);

            }

        }
    }

    @Override
    public int countLights() {
        int lightsOn=0;
        for(int i=0;i<1000;i++){
            for(int j=0;j<1000;j++){
                if(lights[i][j]==1){
                    lightsOn+=1;
                }
            }
        }
        return  lightsOn;
    }

    @Override
    public int getTotalBrightness() {
        for(int i=0;i<1000;i++){
            for(int j=0;j<1000;j++){
                if(bulbs[i][j]>0){
                      totalBrightness +=bulbs[i][j];
                }
            }
        }
        return totalBrightness;
    }
}
