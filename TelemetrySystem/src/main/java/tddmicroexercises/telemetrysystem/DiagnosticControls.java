package tddmicroexercises.telemetrysystem;


import tddmicroexercises.telemetrysystem.Interfaces.TelemetryClient;
import tddmicroexercises.telemetrysystem.Interfaces.TelemetryStatus;

public class DiagnosticControls
{
    private final String DiagnosticChannelConnectionString = "*111#";

    private final TelemetryClient telemetryClient;

    private final TelemetryStatus telemetryStatusClass;
    private String diagnosticInfo = "";

    public  DiagnosticControls( TelemetryClient telemetryClient1, TelemetryStatus telemetryStatusClass1) {
        this.telemetryClient = telemetryClient1;
        this.telemetryStatusClass = telemetryStatusClass1;
    }

    public String getDiagnosticInfo(){
        return diagnosticInfo;
    }

    public void setDiagnosticInfo(String diagnosticInfo){
        this.diagnosticInfo = diagnosticInfo;
    }

    public void checkTransmission() throws Exception
    {
        diagnosticInfo = "";

        telemetryStatusClass.disconnect();

        int retryLeft = 3;
        while (telemetryStatusClass.getOnlineStatus() == false && retryLeft > 0)
        {
            telemetryStatusClass.connect(DiagnosticChannelConnectionString);
            retryLeft -= 1;
        }

        if(telemetryStatusClass.getOnlineStatus() == false)
        {
            throw new Exception("Unable to connect.");
        }

        telemetryClient.send(TelemetryClient.DIAGNOSTIC_MESSAGE);
        diagnosticInfo = telemetryClient.receive();
    }
}