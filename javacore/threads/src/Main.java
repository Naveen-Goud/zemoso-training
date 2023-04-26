
class StartThread extends Thread{
    public void run(){
          for(int n=0;n<8;n++){
              System.out.println("hii there" + n);
              try{
                  Thread.sleep(200);
              }catch(InterruptedException e){
                  //System.out.println(e);
                  e.printStackTrace();
              }
          }
    }
}
public class Main {
    public static void main(String[] args) {
        StartThread s1= new StartThread();
        s1.start();
        StartThread s2= new StartThread();
        s2.start();
    }
}