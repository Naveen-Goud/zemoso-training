package interfaces;

public interface LightMethods {

   int[][] lightOn(int[][] light,int startX,int startY,int endX,int endY, int[][] brightness);
   int[][] lightsOff(int[][] light,int startX,int startY,int endX,int endY);

   int[][] toggle(int[][] light,int startX,int startY,int endX,int endY);

}
