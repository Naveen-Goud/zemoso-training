public class SListExample {
    public static void main(String[] args) {
        SList<Integer> list = new SList<Integer>();
        SListIterator<Integer> iterator = list.iterator();

        iterator.insert(1);
        iterator.insert(2);
        iterator.insert(3);
        iterator.remove();
        iterator.insert(4);
        iterator.insert(4);
        iterator.remove();

        System.out.println(list); // prints [1, 2, 4]
    }
}
