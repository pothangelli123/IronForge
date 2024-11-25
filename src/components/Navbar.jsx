import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navigationItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    {
      label: 'SERVICES',
      path: '/services',
      dropdownItems: [
        { label: 'Financial Close & Consolidation', path: '/services/fccs' },
        { label: 'Planning & Budgeting', path: '/services/epbcs' },
        { label: 'Account Reconciliation', path: '/services/arcs' },
        { label: 'Enterprise Cost Management', path: '/services/ecms' },
        { label: 'Tax Reporting', path: '/services/trcs' },
        { label: 'Narrative Reporting', path: '/services/narrative-reporting' }
      ],
    },
    { label: 'IMPLEMENTATION', path: '/implementation' },
    { label: 'RESOURCES', path: '/resources' },
    { label: 'CONTACT', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 2 : 0}
      sx={{
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)'
          : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            height: isScrolled ? '70px' : '80px',
            transition: 'all 0.3s ease-in-out',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: { xs: '1.5rem', md: '2rem' },
              letterSpacing: '0.5px',
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.2em 0',
              background: isScrolled
                ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                : 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: isScrolled
                ? '2px 2px 4px rgba(33, 150, 243, 0.3)'
                : '2px 2px 4px rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease-in-out',
              '@keyframes pulse': {
                '0%, 100%': {
                  transform: 'scale(1)',
                },
                '50%': {
                  transform: 'scale(1.02)',
                },
              },
              '@keyframes metallic': {
                '0%': {
                  filter: 'brightness(100%) contrast(100%)',
                },
                '50%': {
                  filter: 'brightness(150%) contrast(110%)',
                },
                '100%': {
                  filter: 'brightness(100%) contrast(100%)',
                },
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'shimmer 3s infinite',
                transform: 'skewX(-25deg)',
              },
              '@keyframes shimmer': {
                '0%': {
                  left: '-100%',
                },
                '100%': {
                  left: '200%',
                },
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                bottom: 0,
                left: 0,
                background: isScrolled
                  ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                  : 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
                transformOrigin: 'right',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease-in-out',
              },
              '&:hover': {
                transform: 'translateY(-2px)',
                '&::before': {
                  transformOrigin: 'left',
                  transform: 'scaleX(1)',
                },
              },
              '& span.iron': {
                position: 'relative',
                fontWeight: 900,
                background: isScrolled
                  ? 'linear-gradient(45deg, #1565C0 30%, #2196F3 90%)'
                  : 'linear-gradient(45deg, #ffffff 30%, #e0e0e0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'metallic 3s infinite',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: isScrolled
                    ? 'radial-gradient(circle at 30% 107%, #1565C0 0%, #2196F3 5%, #64B5F6 45%, #1565C0 60%, #2196F3 90%)'
                    : 'radial-gradient(circle at 30% 107%, #ffffff 0%, #e0e0e0 5%, #ffffff 45%, #e0e0e0 60%, #ffffff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'blur(4px)',
                  opacity: 0,
                  animation: 'glow 3s ease-in-out infinite',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '200%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  animation: 'shimmerMetallic 3s infinite',
                  transform: 'skewX(-45deg)',
                },
              },
              '& span.edge': {
                position: 'relative',
                fontWeight: 700,
                background: isScrolled
                  ? 'linear-gradient(45deg, #2196F3 30%, #64B5F6 90%)'
                  : 'linear-gradient(45deg, #f0f0f0 30%, #ffffff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'metallic 3s infinite 0.15s',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: isScrolled
                    ? 'radial-gradient(circle at 30% 107%, #2196F3 0%, #64B5F6 5%, #90CAF9 45%, #2196F3 60%, #64B5F6 90%)'
                    : 'radial-gradient(circle at 30% 107%, #f0f0f0 0%, #ffffff 5%, #f0f0f0 45%, #ffffff 60%, #f0f0f0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'blur(4px)',
                  opacity: 0,
                  animation: 'glow 3s ease-in-out infinite 0.15s',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '200%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  animation: 'shimmerMetallic 3s infinite 0.15s',
                  transform: 'skewX(-45deg)',
                },
              },
              '@keyframes shimmerMetallic': {
                '0%': {
                  left: '-200%',
                  opacity: 0,
                },
                '45%': {
                  opacity: 0.3,
                },
                '50%': {
                  opacity: 0.6,
                },
                '55%': {
                  opacity: 0.3,
                },
                '100%': {
                  left: '200%',
                  opacity: 0,
                },

              },
              '@keyframes glow': {
                '0%, 100%': {
                  opacity: 0,
                },
                '50%': {
                  opacity: 0.5,
                },
              },
            }}
          >
            <span className="iron">Iron</span>
            <span className="edge">Forge</span>
          </Typography>

          {isMobile ? (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ 
                color: isScrolled ? 'text.primary' : 'white'
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navigationItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    position: 'relative',
                    '&:hover .MuiBox-root': {
                      opacity: 1,
                      visibility: 'visible',
                      transform: 'translateY(0)',
                    },
                  }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    endIcon={item.dropdownItems && <KeyboardArrowDownIcon />}
                    sx={{
                      color: isScrolled ? 'text.primary' : 'white',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                      padding: '8px 16px',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '6px',
                        left: '50%',
                        transform: location.pathname === item.path 
                          ? 'translateX(-50%)' 
                          : 'translateX(-50%) scaleX(0)',
                        height: '2px',
                        width: '20px',
                        backgroundColor: isScrolled ? 'primary.main' : 'white',
                        transition: 'transform 0.3s ease-in-out'
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          transform: 'translateX(-50%) scaleX(1)'
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.dropdownItems && (
                    <Box
                      className="MuiBox-root"
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        transform: 'translateY(10px)',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        padding: '8px 0',
                        opacity: 0,
                        visibility: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                        zIndex: 1000,
                        minWidth: '200px',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '-6px',
                          left: '20%',
                          transform: 'translateX(-50%) rotate(45deg)',
                          width: '12px',
                          height: '12px',
                          backgroundColor: 'white',
                        }
                      }}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Button
                          key={dropdownItem.label}
                          component={Link}
                          to={dropdownItem.path}
                          fullWidth
                          sx={{
                            color: 'text.primary',
                            padding: '8px 24px',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            '&:hover': {
                              backgroundColor: 'rgba(0,0,0,0.04)',
                              color: 'primary.main'
                            }
                          }}
                        >
                          {dropdownItem.label}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: isScrolled ? 'primary.main' : 'white',
                  color: isScrolled ? 'white' : 'primary.main',
                  '&:hover': {
                    backgroundColor: isScrolled ? 'primary.dark' : 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          )}

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': { 
                width: '100%', 
                maxWidth: '300px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }
            }}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navigationItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <Button
                    fullWidth
                    component={Link}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    sx={{
                      py: 2,
                      px: 4,
                      justifyContent: 'flex-start',
                      color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                      borderLeft: location.pathname === item.path ? '3px solid' : 'none',
                      borderColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        color: 'primary.main'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.dropdownItems && (
                    <List sx={{ pl: 4 }}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <ListItem key={dropdownItem.label} disablePadding>
                          <Button
                            fullWidth
                            component={Link}
                            to={dropdownItem.path}
                            onClick={handleDrawerToggle}
                            sx={{
                              py: 1.5,
                              px: 4,
                              justifyContent: 'flex-start',
                              color: 'text.secondary',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                color: 'primary.main'
                              }
                            }}
                          >
                            {dropdownItem.label}
                          </Button>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </ListItem>
              ))}
              <ListItem sx={{ mt: 2, px: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  component={Link}
                  to="/contact"
                  onClick={handleDrawerToggle}
                  sx={{
                    py: 1.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  Get Started
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

