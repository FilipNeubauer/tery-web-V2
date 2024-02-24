// MUI
import { Button, Collapse, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

// REACT
import { useEffect, useState } from "react"

// ICONS
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { DisplaySettings } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InstagramIcon from '@mui/icons-material/Instagram';

// STYELS
import { StyleSheet } from "../pages/home/Home";
import NavList from "./NavList";
import LeftNav from "./LeftNav";


type Props = {
    children: React.ReactNode
}


const styles: StyleSheet = {
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        height: "7rem",
        padding: "1rem 2rem"
    },
    rotate: {
        transformOrigin: "center",
        transition: "transform 0.3s ease-in-out"
    }
}



const Layout = ({ children }: Props) => {

    const [open, setOpen] = useState(false);

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1200);


    const openIg = () => {
        window.open("https://www.instagram.com/tery_stoklasova/", "_blank")
    }

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1200);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])


    return (
        <>


            {
                !isWideScreen &&
                <nav style={{ position: "absolute", display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ zIndex: 1300 }}>
                        <Hamburger color="white" size={23} toggled={open} toggle={setOpen} /> 
                    </div>
                    <Typography component={Link} to={"/"} variant="h2" sx={{ fontSize: "1.2rem", color: "white", fontWeight: 400, textDecoration: "none"  }}>@tery_stoklasova</Typography>
                </nav>
            }


            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="left"
                PaperProps={{ sx: { backgroundColor: "rgba(28,28,28,1)"}}}
            >
                <NavList open={open} setOpen={setOpen} />

            </Drawer>

            {
                isWideScreen && <LeftNav/>
            }

            <main style={{ marginLeft: isWideScreen ? "250px" : 0 }}>
                {children}
            </main>
            <footer style={{...styles.footer, marginLeft: isWideScreen ? "250px" : 0}}>
                <IconButton onClick={openIg} >
                    <InstagramIcon />
                </IconButton>
                <div>
                    <Typography style={{ textAlign:"right", fontSize: "1rem", color: "rgba(28,28,28,1", fontWeight: 100}}>EMAIL <a target="_blank" href="mailto:terystoklasova@seznam.cz">terystoklasova@seznam.cz</a></Typography>
                    <Typography style={{textAlign:"right",  fontSize: "1rem", color: "rgba(28,28,28,1", fontWeight: 100}}>TEL <a target="_blank" href="tel:+420 605 575 031">+420 605 575 031</a></Typography>
                </div>

            </footer>
        </>
    )
}

export default Layout