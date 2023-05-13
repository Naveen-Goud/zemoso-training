public class SList<T> {
    private Link<T> head = new Link<T>(null);

    public SListIterator<T> iterator() {
        return new SListIterator<T>(head);
    }

    public String toString() {
        if (head.next == null) {
            return "[]";
        }
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        SListIterator<T> it = iterator();
        while (it.hasNext()) {
            T element = it.next();
            sb.append(element.toString());
            if (it.hasNext()) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }

    static class Link<T> {
        T element;
        Link<T> next;

        Link(T element) {
            this.element = element;
        }
    }
}

