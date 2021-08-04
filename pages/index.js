import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/Inbox";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  Grid: {
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CV
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          className={classes.Grid}
          wrap="nowrap"
        >
          <Avatar alt="Remy Sharp" src="serif.jpg" />
          <Typography
            variant="h6"
            color="initial"
            style={{ textAlign: "center", padding: 5 }}
          >
            Şerif ÇOLAKEL
          </Typography>
          <span>Elektrik Elektronik Mühendisi</span>
        </Grid>
        <Divider />
        <Typography variant="h6" align="center">
          İletişim Bilgileri
        </Typography>
        <Divider />
        <List>
          {["serifcolakel0@gmail.com", "Bana Ulaşın", "Konumum"].map(
            (text, index) => (
              <ListItem key={text}>
                <ListItemIcon>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="nowrap"
                  >
                    {index === 0 ? (
                      <a href="mailto:serifcolakel0@gmail.com" rel="noreferrer">
                        <Button
                          variant="text"
                          color="default"
                          style={{ textTransform: "none" }}
                          startIcon={<MailIcon />}
                        >
                          <ListItemText primary={text} />
                        </Button>
                      </a>
                    ) : "" || index === 1 ? (
                      <a href="tel:05398568303" rel="noreferrer">
                        <Button
                          variant="text"
                          color="default"
                          style={{ textTransform: "none" }}
                          startIcon={<PhoneIcon />}
                        >
                          <ListItemText primary={text} />
                        </Button>
                      </a>
                    ) : "" || index === 2 ? (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com.tr/maps/place/Esentepe,+13.+Sk.,+31040+Antakya%2FHatay/@36.2087181,36.1379893,17z/data=!3m1!4b1!4m5!3m4!1s0x1525c3acf7eab0dd:0x32df84b86c83ea0c!8m2!3d36.2087138!4d36.140178"
                      >
                        <Button
                          variant="text"
                          color="default"
                          style={{ textTransform: "none" }}
                          startIcon={<LocationOnIcon />}
                        >
                          <ListItemText primary={text} />
                        </Button>
                      </a>
                    ) : (
                      ""
                    )}
                  </Grid>
                </ListItemIcon>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <Typography variant="h6" align="center">
          Kişisel Bilgiler
        </Typography>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augasdasue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec
          massa sapien fauciasdasdbus et molestie ac.
        </Typography>
      </main>
    </div>
  );
}
