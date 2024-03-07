import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Container, Toolbar, Grid, Box, Stack, IconButton, Menu, MenuItem, ListItemIcon, Link, Typography, Button } from '@mui/material';
import Logo from "../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import PersonIcon from '@mui/icons-material/Person';
import MemoryIcon from '@mui/icons-material/Memory';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
   

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

   

    return (
        <AppBar position='static' sx={{ background: '#FFFFFF', color: '#000000', boxShadow: "none" }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Grid  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "100px"}}>
                    <Grid item xs={2}>
                    <img src={Logo} edge='start' alt="Logo" width='99' height='64'/>
                    </Grid>
                    <Grid item xs={6}>
                    <Stack direction='row' spacing={4} marginRight={12} style={{ fontWeight: 400 }}  sx={{ fontSize: '18px',  display: { xs: 'none', md: 'flex' } }}>
                        <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', color: '#0E0E0E',  }}>Главное</Link>
                        <Link component={RouterLink} to="/TreeCards" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Бюджет</Link>
                        <Link component={RouterLink} to="/AboutUs" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Финансовые цели</Link>
                        <Link component={RouterLink} to="/Memories" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Статистика</Link>
                        <Link component={RouterLink} to="/Family tree" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Транзакции</Link>
                    </Stack>
                    </Grid>
                    <Grid item xs={4}>
                   <Button sx={{backgroundColor: "#E1B012", borderRadius: "20px", textTransform: "capitalize", color: "#FFFFFF", padding: "6px 14px", fontWeight: "600"}}>Регистрация</Button>
                   <Button sx={{backgroundColor: "#E1B012", borderRadius: "20px", textTransform: "capitalize", color: "#FFFFFF", padding: "6px 26px", fontWeight: "600"}}> Вход</Button>
                   </Grid>
                   </Grid>

                    <Box edge='end' sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem to="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                Главное
                            </MenuItem>
                            <MenuItem to="/TreesCards">
                                <ListItemIcon>
                                    <NaturePeopleIcon />
                                </ListItemIcon>
                                Деревья
                            </MenuItem>
                            <MenuItem to="/AboutUs">
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                О нас
                            </MenuItem>
                            <MenuItem to="/Memories">
                                <ListItemIcon>
                                    <MemoryIcon />
                                </ListItemIcon>
                                Воспоминания
                            </MenuItem>
                            <MenuItem to="/FamilyTree">
                                <ListItemIcon>
                                    <FamilyRestroomIcon />
                                </ListItemIcon>
                                Семейное древо
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;