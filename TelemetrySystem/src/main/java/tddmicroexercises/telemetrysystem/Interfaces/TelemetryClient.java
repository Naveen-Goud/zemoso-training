package tddmicroexercises.telemetrysystem.Interfaces;


public interface TelemetryClient {


    void send(String msg);
    String receive();
}