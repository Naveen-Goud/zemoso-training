import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface labelProps {
  label: React.ReactNode;
}
const ConsiderComponent = () => {
  return (
    <div
      style={{
        background: "#FAF8EB",
        border: "1px solid #FAF8EB",
        borderRadius: "4px",
        color: "#A08817",
      }}
    >
      CONSIDER
    </div>
  );
};
const EngageComponent = ({ label }: labelProps) => {
  return (
    <div
      style={{
        background: "#FFFFF",
        border: "1px solid #F2FCFB",
        borderRadius: "4px",
        color: "#17A076",
      }}
    >
      {label}
    </div>
  );
};
const StateManagement = () => {
  const [rows, setRows] = useState<
    {
      id: number;
      name: string;
      adjudication: JSX.Element | string;
      status: JSX.Element;
      location: string;
      date: string;
    }[]
  >([
    {
      id: 1,
      name: "john smith",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "USA",
      date: "2022-01-15",
    },
    {
      id: 2,
      name: "serena",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "Canada",
      date: "2023-07-05",
    },
    {
      id: 3,
      name: "Charlie",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "Mexico",
      date: "2023-08-23",
    },
    {
      id: 4,
      name: "David",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "England",
      date: "2023-04-2",
    },
    {
      id: 5,
      name: "Walsh",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "Canada",
      date: "2023-07-25",
    },
    {
      id: 6,
      name: "jogn smith",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "Canada",
      date: "2023-06-20",
    },
    {
      id: 7,
      name: "William",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "Australia",
      date: "2023-04-25",
    },
    {
      id: 8,
      name: "jereme",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "Britain",
      date: "2023-03-25",
    }, {
      id: 9,
      name: "josh",
      adjudication: "-",
      status: <EngageComponent label="CLEAR" />,
      location: "Britain",
      date: "2023-06-01",
    },
  ]);

  const engageHandler = (id: number) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, adjudication: <EngageComponent label="ENGAGE" /> };
      } else {
        return row;
      }
    });
    setRows(updatedRows);
  };
  const considerHandler = (id: number) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, status: <ConsiderComponent /> };
      } else {
        return row;
      }
    });
    setRows(updatedRows);
  };

  return (
    <>
      <Typography variant="h2" sx={{ width: "90%", margin: "27px auto" }}>
         Candidates
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ width: "90%", margin: "27px auto" }}
      >
        <Table sx={{ width: "100%" }} aria-label="candidates table">
          <TableHead sx={{ backgroundColor: "" }}>
            <TableRow>
              <TableCell
                align="center"
                width="75px"
                sx={{ fontWeight: "bold" }}
              >
                NAME
              </TableCell>
              <TableCell
                align="center"
                width="75px"
                sx={{ fontWeight: "bold" }}
              >
                ADJUDICATION
              </TableCell>
              <TableCell
                align="center"
                width="78px"
                sx={{ fontWeight: "bold" }}
              >
                STATUS
              </TableCell>
              <TableCell
                align="center"
                width="75px"
                sx={{ fontWeight: "bold" }}
              >
                LOCATION
              </TableCell>
              <TableCell
                align="center"
                width="75px"
                sx={{ fontWeight: "bold" }}
              >
                DATE
              </TableCell>
              <TableCell align="center" width="75px"></TableCell>
              <TableCell align="center" width="75px"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" style={{ color: "#224DFF" }}>
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.adjudication}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell
                  align="center"
                  onClick={(event) => engageHandler(row.id)}
                >
                  <Button size="small" variant="outlined" sx={{background:'#edede9'}}>
                    ENGAGE
                  </Button>
                </TableCell>
                <TableCell
                  align="center"
                  onClick={(event) => considerHandler(row.id)}
                >
                  <Button size="small" variant="outlined" sx={{background:'#edede9'}}>
                    CONSIDER
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StateManagement;
