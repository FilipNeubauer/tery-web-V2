import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../consts/colors";

// import { StyleSheet } from "../pages/home/Home";

type Props = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

const NavList = ({ setOpen }: Props) => {
  const [, setBrands] = useState(false);

  // const styles: StyleSheet = {
  //     footer: {
  //         display: "flex",
  //         flexDirection: "row",
  //         justifyContent: "space-between",
  //         flexWrap: "wrap",
  //         alignItems: "center"
  //     },
  //     rotate: {
  //         transformOrigin: "center",
  //         transition: "transform 0.3s ease-in-out"
  //     }
  // }

  useEffect(() => {
    if (location.pathname.startsWith("/brands")) {
      setBrands(true);
    } else {
      setBrands(false);
    }
  }, [location.pathname]);

  return (
    <List
      style={{ marginTop: "32px", color: colors.black, alignItems: "center" }}
    >
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => setOpen(false)}
          component={Link}
          to={"/"}
        >
          <ListItemText
            sx={{ textAlign: "center" }}
            primary={
              <Typography
                sx={{
                  fontWeight: location.pathname === "/" ? "bold" : "normal",
                }}
              >
                WELCOME
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => setOpen(false)}
          component={Link}
          to={"/about"}
        >
          <ListItemText
            sx={{ textAlign: "center" }}
            primary={
              <Typography
                sx={{
                  fontWeight:
                    location.pathname === "/about" ? "bold" : "normal",
                }}
              >
                ABOUT ME
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => setOpen(false)}
          component={Link}
          to={"/portfolio"}
        >
          <ListItemText
            sx={{ textAlign: "center" }}
            primary={
              <Typography
                sx={{
                  fontWeight:
                    location.pathname === "/portfolio" ? "bold" : "normal",
                }}
              >
                PORTFOLIO
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        {/* <IconButton></IconButton> */}
        <ListItemButton
          onClick={() => setOpen(false)}
          component={Link}
          to={"/events"}
        >
          <ListItemText
            sx={{ textAlign: "center" }}
            primary={
              <Typography
                sx={{
                  fontWeight:
                    location.pathname === "/events" ? "bold" : "normal",
                }}
              >
                EVENTS
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        {/* <div style={{ display: "flex" }}> */}
        {/* <ListItemIcon sx={{ minWidth: 0, paddingLeft: 0, paddingRight: 0}} >
                            <IconButton sx={{ paddingLeft: 0, paddingRight: 0}} style={{...styles.rotate, transform: brands ? "rotate(-180deg)" : "rotate(0)"}} onClick={() => setBrands(prev => !prev)}>
                                <KeyboardArrowDownIcon sx={{ paddingLeft: 0, paddingRight: 0, color: "white"}} />
                            </IconButton>
                        </ListItemIcon> */}
        <ListItemButton
          onClick={() => setOpen(false)}
          component={Link}
          to={"/brands"}
        >
          <ListItemText
            sx={{ textAlign: "center" }}
            primary={
              <Typography
                sx={{
                  fontWeight:
                    location.pathname === "/brands" ? "bold" : "normal",
                }}
              >
                BRANDS
              </Typography>
            }
          />
        </ListItemButton>
        {/* </div> */}
      </ListItem>
      {/* <Collapse in={brands} orientation="vertical"  >
                        <List component="div" disablePadding>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/wearofabsolue"} >
                                    <ListItemText sx={{ textAlign: "center"}} primary={<Typography sx={{ fontWeight: location.pathname === "/brands/wearofabsolue" ? "bold" : "normal" }}>WEAROFABSOLUE</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/lashstudio"}>
                                    <ListItemText sx={{ textAlign: "center"}} primary={<Typography sx={{ fontWeight: location.pathname === "/brands/lashstudio" ? "bold" : "normal" }}>LASHSTUDIO</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/conceptflannel"}>
                                    <ListItemText sx={{ textAlign: "center"}} primary={<Typography sx={{ fontWeight: location.pathname === "/brands/conceptflannel" ? "bold" : "normal" }}>CONCEPTFLANNEL</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/mayam"}>
                                    <ListItemText sx={{ textAlign: "center"}} primary={<Typography sx={{ fontWeight: location.pathname === "/brands/mayam" ? "bold" : "normal" }}>MAYAM</Typography>} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse> */}

      {/* <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 0, paddingLeft: 0, paddingRight: 0}} >
                            <IconButton sx={{ paddingLeft: 0, paddingRight: 0}} style={{ ...styles.rotate, transform: proejcts ? "rotate(-180deg)" : "rotate(0)" }} onClick={() => setProjects(prev => !prev)}>
                                <KeyboardArrowDownIcon sx={{ paddingLeft: 0, paddingRight: 0, color: "white"}} />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/projects"} sx={{ paddingLeft: 0}} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/projects" ? "bold" : "normal" }}>PROJECTS</Typography>} />
                        </ListItemButton>
                    </ListItem> */}

      {/* <Collapse in={proejcts} orientation="vertical"  >
                        <List component="div" disablePadding>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setProjects(false)}} component={Link} to={"/brands/creative-shoot"} >
                                    <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/brands/creative-shoot" ? "bold" : "normal" }}>CREATIVE SHOOT</Typography>} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse> */}

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => setOpen(false)}
          component={Link}
          to={"/contact"}
        >
          <ListItemText
            sx={{ textAlign: "center" }}
            primary={
              <Typography
                sx={{
                  fontWeight:
                    location.pathname === "/about" ? "bold" : "normal",
                }}
              >
                CONTACT
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default NavList;
