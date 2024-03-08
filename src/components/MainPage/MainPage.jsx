import React from "react";
import { Container, Grid } from "@mui/material";

const MainPage = () => {
    return (
       <Container sx={{ marginTop: "100px", marginBottom: "100px"}}>
         <Grid container spacing={4}  sx={{ backgroundColor: "rgba(231, 245, 255, 0.5)"}}>
            <Grid></Grid>
            <Grid></Grid>
         </Grid>
       </Container>
    );
};

export default MainPage;