public class SListIterator<T> {
    private SList.Link<T> current;

    SListIterator(SList.Link<T> head) {
        current = head;
    }

    public boolean hasNext() {
        return current.next != null;
    }

    public T next() {
        current = current.next;
        return current.element;
    }

    public void insert(T element) {
        current.next = new SList.Link<T>(element);
        current = current.next;
    }

    public void remove() {
        if (current.next != null) {
            current.next = current.next.next;
        }
    }
}
