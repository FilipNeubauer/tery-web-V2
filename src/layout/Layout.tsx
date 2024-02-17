// MUI
import { Button, Collapse, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

// REACT
import { useState } from "react"

// ICONS
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { DisplaySettings } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InstagramIcon from '@mui/icons-material/Instagram';

// STYELS
import { StyleSheet } from "../pages/home/Home";


type Props = {
    children: React.ReactNode
}


const styles: StyleSheet = {
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center"
    },
    rotate: {
        transformOrigin: "center",
        transition: "transform 0.3s ease-in-out"
    }
}



const Layout = ({ children }: Props) => {

    const [open, setOpen] = useState(false);
    const [brands, setBrands] = useState(false);
    const [proejcts, setProjects] = useState(false);


    const openIg = () => {
        window.open("https://www.instagram.com/tery_stoklasova/", "_blank")
    }


    return (
        <>


            {/* size? */}
            <nav style={{ position: "absolute", display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div style={{ zIndex: 1300 }}>
                    <Hamburger color="white" size={20} toggled={open} toggle={setOpen} /> 
                </div>
                <Typography variant="h2" sx={{ fontSize: "20px", fontWeight: "bold", color: "white"  }}>@tery_stoklasova</Typography>
            </nav>

            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="left"
                PaperProps={{ sx: { backgroundColor: "black"}}}
            >
                <List style={{ marginTop: "32px", color: "white" }} >
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/"} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/" ? "bold" : "normal" }}>WELCOME</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/about"} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/about" ? "bold" : "normal" }}>ABOUT ME</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/portfolio"} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/portfolio" ? "bold" : "normal" }}>PORTFOLIO</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        {/* <IconButton></IconButton> */}
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/events"} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/events" ? "bold" : "normal" }}>EVENTS</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>

                        {/* <div style={{ display: "flex" }}> */}
                        <ListItemIcon sx={{ minWidth: 0, paddingLeft: 0, paddingRight: 0}} >
                            <IconButton sx={{ paddingLeft: 0, paddingRight: 0}} style={{...styles.rotate, transform: brands ? "rotate(-180deg)" : "rotate(0)"}} onClick={() => setBrands(prev => !prev)}>
                                <KeyboardArrowDownIcon sx={{ paddingLeft: 0, paddingRight: 0, color: "white"}} />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/brands"} sx={{ paddingLeft: 0}} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/brands" ? "bold" : "normal" }}>BRANDS</Typography>} />
                        </ListItemButton>
                        {/* </div> */}
                    </ListItem>
                    <Collapse in={brands} orientation="vertical"  >
                        <List component="div" disablePadding>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/wearabsolue"} >
                                    <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/brands/wearabsolue" ? "bold" : "normal" }}>WEARABSOLUE</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/lashstudio"}>
                                    <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/brands/lashstudio" ? "bold" : "normal" }}>LASHSTUDIO</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/conceptflannel"}>
                                    <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/brands/conceptflannel" ? "bold" : "normal" }}>CONCEPTFLANNEL</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setBrands(false)}} component={Link} to={"/brands/mayam"}>
                                    <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/brands/mayam" ? "bold" : "normal" }}>MAYAM</Typography>} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
                    
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 0, paddingLeft: 0, paddingRight: 0}} >
                            <IconButton sx={{ paddingLeft: 0, paddingRight: 0}} style={{ ...styles.rotate, transform: proejcts ? "rotate(-180deg)" : "rotate(0)" }} onClick={() => setProjects(prev => !prev)}>
                                <KeyboardArrowDownIcon sx={{ paddingLeft: 0, paddingRight: 0, color: "white"}} />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/projects"} sx={{ paddingLeft: 0}} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/projects" ? "bold" : "normal" }}>PROJECTS</Typography>} />
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={proejcts} orientation="vertical"  >
                        <List component="div" disablePadding>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {setOpen(false); setProjects(false)}} component={Link} to={"/brands/creative-shoot"} >
                                    <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/brands/creative-shoot" ? "bold" : "normal" }}>CREATIVE SHOOT</Typography>} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpen(false)} component={Link} to={"/contact"} >
                            <ListItemText primary={<Typography sx={{ fontWeight: location.pathname === "/about" ? "bold" : "normal" }}>CONTACT</Typography>} />
                        </ListItemButton>
                    </ListItem>


                </List>

            </Drawer>

            <main>
                {children}
            </main>
            <footer style={styles.footer}>
                <IconButton onClick={openIg} >
                    <InstagramIcon />
                </IconButton>
                <div>
                    <p>EMAIL <a target="_blank" href="mailto:terystoklasova@seznam.cz">terystoklasova@seznam.cz</a></p>
                    <p>TEL <a target="_blank" href="tel:+420 605 575 031">+420 605 575 031</a></p>
                </div>

            </footer>
        </>
    )
}

export default Layout