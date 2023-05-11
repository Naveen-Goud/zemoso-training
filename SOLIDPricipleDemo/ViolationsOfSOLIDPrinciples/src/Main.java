

class BookingAndPayment {
    public void bookFlight() {
        System.out.println("Book ticket for flight ticket");
        // logic for booking a flight
    }

    public void bookHotel() {
        System.out.println("Book hotel for stay");
        // logic for booking a hotel
    }

    public void payWithCreditCard() {
        System.out.println("Payment using credit card for the ticket");
        // logic for payment using credit card
    }

    public void payWithUpi() {
        System.out.println("Payment using the UPI ");
        // logic for payment using PayPal
    }

    public void bookAndPay() {
        System.out.println("select the ticket and then select the payment");
        // logic for booking and payment
    }
}




public class Main {
    public static void main(String[] args) {
       BookingAndPayment bookTicket = new BookingAndPayment();
       bookTicket.bookAndPay();
       bookTicket.bookFlight();
       bookTicket.bookHotel();
       bookTicket.payWithCreditCard();
    }
}