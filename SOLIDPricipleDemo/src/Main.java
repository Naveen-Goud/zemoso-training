import Booking.Booking;
import Payments.CreditCardPayment;
import Payments.Payment;
import Booking.FlightBooking;


// Class for booking manager
// can be substutited
class BookingManager {
    private Booking booking;
    private Payment payment;

    public BookingManager(Booking booking, Payment payment) {
        this.booking = booking;
        this.payment = payment;
    }

    public void bookAndPay() {
        booking.book();
        payment.pay();
    }
}


public class Main {
    public static void main(String[] args) {
        BookingManager user1= new BookingManager(new FlightBooking(),new CreditCardPayment());
        user1.bookAndPay();
    }
}