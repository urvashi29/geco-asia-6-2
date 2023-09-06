import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DisplayForm = ({ userData }) => {
  console.log(userData); //array of objects

  return (
    <>
      {userData.map((user) => {
        return (
          <p>
            <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "pink" }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {user.name}
                </Typography>
              </CardContent>
            </Card>
          </p>
        );
      })}
    </>
  );
};

export default DisplayForm;
