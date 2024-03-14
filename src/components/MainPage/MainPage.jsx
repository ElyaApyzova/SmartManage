import React from "react";
import {Container, Grid, Typography, Button } from "@mui/material";
import MainImage from "../../assets/Main_image.png";

const MainPage = () => {
  return (
   <div className="wrapper">
    <Container
      sx={{
        marginBottom: "100px"
      }}
    >
      <Grid container spacing={8} sx={{ marginTop: "1px"}}>
        <Grid item xs={6}>
          <Typography
            variant="h1"
            component="div"
            sx={{ fontSize: "40px", fontWeight: "600", marginBottom: "20px", color: "#FFFFFF" }}
          >
            Управление личными финансами{" "}
          </Typography>
          <Typography
            variant="body"
            component="div"
            sx={{ fontSize: "24px", fontWeight: "500", marginBottom: "40px", color: "#FFFFFF" }}
          >
            Стройте свои бюджеты легко и просто__ в несколько шагов{" "}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E1B012",
              borderRadius: "20px",
              textTransform: "capitalize",
              color: "#FFFFFF",
              padding: "8px 30px",
              fontSize: "16px",
              fontWeight: "600",
              "&:hover": { backgroundColor: "#008B72" },
            }}
          >
            Создать счёт
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={MainImage} alt="MainImage" sx={{ width: "585px", height: "408px"}}/>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default MainPage;
