import interfaces.LightMethods;

public class LightMethodImpl implements LightMethods {

    private int[][] brightness=new int[1000][1000];
    private int totalBrightness;
    @Override
    public int[][] lightOn(int[][] light, int startX, int startY, int endX, int endY, int[][] brightness) {
        for(int i = startX;i<endX;i++){
            for(int j=startY;j<endY;j++){
                light[i][j] = 1;
                brightness[i][j]++;
            }

        }
        return  light;
    }

    @Override
    public int[][] lightsOff(int[][] light, int startX, int startY, int endX, int endY) {

        for(int i = startX;i<endX;i++){
            for(int j=startY;j<endY;j++){
                light[i][j]=0;
                brightness[i][j]=Math.max(brightness[i][j]-1,0);
            }
        }
        return  light;
    }

    @Override
    public int[][] toggle(int[][] light, int startX, int startY, int endX, int endY) {
        for(int i = startX;i<endX;i++){
            for(int j=startY;j<endY;j++){
                light[i][j] ^= 1;
                brightness[i][j]+=2;
            }
        }
        return  light;
    }

}
