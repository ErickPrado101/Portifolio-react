import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { assets } from '../../assets/assets';
import {
  Button,
  ButtonGroup,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';

interface MenuItem {
  text: string;
  link: string;
}

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems: MenuItem[] = [
    { text: 'Ínicio', link: 'hero' },
    { text: 'Sobre mim', link: 'readme' },
    { text: 'Contatos', link: 'contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          backgroundColor: '#111',
          paddingInline: '5%'
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={assets.logo}
              alt="Logo"
              style={{ height: 35, marginRight: 16 }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily: 'VT323, monospace', color: '#ffffff' }}
            >
              Érick P. Gonçalves
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      padding: 2,
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem button key={index}>
                        <ScrollLink to={item.link} smooth={true} duration={500}>
                          <ListItemText primary={item.text} />
                        </ScrollLink>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box
                  sx={{ paddingTop: 40, paddingX: 2, paddingBottom: 2 }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#000000',
                      borderColor: '#5c5c5c',
                      width: '100%',
                    }}
                    href="/Erick-CV.pdf"
                    download="Erick-CV.pdf"
                  >
                    Currículo
                  </Button>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ButtonGroup
                variant="text"
                size="small"

                aria-label="Basic button group"
                sx={{
                  '& .MuiButton-root': {
                    color: 'white',
                  },
                  '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                    borderColor: '#1b64ec',
                  },
                  '& .MuiButtonGroup-grouped:last-of-type': {
                    marginRight: 0,
                  },
                }}
              >
                {menuItems.map((item, index) => (
                  <Button key={index}>
                    <ScrollLink to={item.link} smooth={true} duration={500}>
                      {item.text}
                    </ScrollLink>
                  </Button>
                ))}
              </ButtonGroup>
              <Button
                variant="outlined"
                href="./Erick-CV.pdf"
                download="Erick-CV.pdf"
                sx={{
                  color: '#ffffff',
                  borderColor: '#1b64ec',
                }}
              >
                Currículo
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
