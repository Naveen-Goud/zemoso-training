import React, { useEffect, useState } from "react";
import { Paper, Stack, Button, Typography, Grid } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import configData from "../../config.json";
import { publicAPITest, securedAPITest } from "../../services";

const DashBoardPage = () => {
  const { getAccessTokenSilently,  logout} = useAuth0();
  const [accessToken, setAccessToken] = useState("");
  const [apiResponse, setApiResponse] = useState<any>("");  

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const res = await getAccessTokenSilently({
          authorizationParams: {
            audience: configData.audience,
            scope: configData.scope,
          },
        });
        setAccessToken(res);
      } catch (e:any) {
        console.log(e.message);
      }
    };
    getAccessToken();
  }, []);

  const handlePublicAPIClick = async () => {
    try {
      const response:any = await publicAPITest();
      console.log( response )
      setApiResponse(response.message);  
    } catch (error) {
      console.error(error);
    }
  };

  const handleSecuredAPIClick = async () => {
    try {
      const response:any = await securedAPITest(accessToken);
      setApiResponse(response.message); 
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <Paper style={{ padding: "20px" }}>
      <Stack spacing={2}>
        <Typography variant="h4">Dashboard</Typography>
        <Stack direction={"column"} spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePublicAPIClick}
          >
          {"  Public API"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSecuredAPIClick}
          >
           {" Private API"}
          </Button>
          <Button variant="contained" color="secondary" onClick={() => logout()}>
           {" Log Out"}
          </Button>
        </Stack>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">API Response:</Typography>
            <pre>{apiResponse}</pre>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default DashBoardPage;
