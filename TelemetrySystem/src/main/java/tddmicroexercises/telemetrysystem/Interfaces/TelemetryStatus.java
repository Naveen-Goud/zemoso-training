package tddmicroexercises.telemetrysystem.Interfaces;

public interface TelemetryStatus {

    boolean getOnlineStatus();

    void disconnect();

    void connect(String telemetryServerConnectionString);
}
