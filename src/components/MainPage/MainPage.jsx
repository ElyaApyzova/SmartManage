import React from "react";
import {Box, Container, Grid, Typography, Button } from "@mui/material";
import MainImage from "../../assets/Main_image.png";

const MainPage = () => {
  return (
   <Box component="section" sx={{ width: "100%",
      height: "100%", bgcolor: "#E7F5FF" }}>
    <Container
      sx={{
        marginTop: "100px",
        marginBottom: "100px"
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography
            variant="h1"
            component="div"
            sx={{ fontSize: "48px", fontWeight: "600", marginBottom: "20px" }}
          >
            Управление личными финансами{" "}
          </Typography>
          <Typography
            variant="body"
            component="div"
            sx={{ fontSize: "30px", fontWeight: "500", marginBottom: "40px" }}
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
              fontSize: "18px",
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
    </Box>
  );
};

export default MainPage;
