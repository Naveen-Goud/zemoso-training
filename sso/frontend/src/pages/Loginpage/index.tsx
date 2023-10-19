import React from "react";
import { Paper, Typography, Button, Stack } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect();
  };

  return (
    <Paper
      style={{ width: "220px", justifyContent: "center", paddingLeft: "50px" }}
    >
      <Stack direction={"column"} spacing={"16px"} width={"190px"}>
        <Typography children={"Sign In"} />

        <Button variant="contained" color="primary" onClick={handleSignUp}>
          {"Login in"}
        </Button>
      </Stack>
    </Paper>
  );
};

export default LoginPage;
