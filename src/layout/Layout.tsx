// MUI
import { Drawer, IconButton, Typography } from "@mui/material"

// REACT
import { useEffect, useState } from "react"

// ICONS
import Hamburger from "hamburger-react";
// import { Link } from "react-router-dom";
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
                <nav style={{ position: open ? "absolute" : "fixed", display: "flex", justifyContent: "flex-end", flexDirection: "row", alignItems: "center", background: location.pathname !== "/" ? "black": "none", width: location.pathname !== "/" ? "100%": "100%" }}>
                    {/* <Typography component={Link} to={"/"} variant="h2" sx={{ fontSize: "1rem", color: location.pathname === "/" ? "white": "white", fontWeight: 400, textDecoration: "none", marginLeft: "1rem"  }}>@tery_stoklasova</Typography> */}
                    <div style={{ zIndex: 1300 }}>
                        <Hamburger direction="right" color={location.pathname === "/" || open ? "white": "white" } size={23} toggled={open} toggle={setOpen} /> 
                    </div>
                </nav>
            }


            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
                PaperProps={{ sx: { backgroundColor: "black", width: !isWideScreen ? "100%" : ""}}}
            >
                <NavList open={open} setOpen={setOpen} />

            </Drawer>

            {
                isWideScreen && <LeftNav/>
            }

            <main style={{ marginLeft: isWideScreen ? "250px" : 0, paddingTop: location.pathname === "/" ? 0 : "2rem", backgroundColor: "black", minHeight: "95vh" }}>
                {children}
            </main>
            <footer style={{...styles.footer, marginLeft: isWideScreen ? "250px" : 0, backgroundColor: "black"}}>
                <IconButton onClick={openIg} style={{ color: "white" }} >
                    <InstagramIcon />
                </IconButton>
                <div>
                    <Typography style={{ textAlign:"right", fontSize: "0.8rem", color: "white", fontWeight: 100}}>EMAIL <a target="_blank" style={{ color: "white" }} href="mailto:terystoklasova@seznam.cz">terystoklasova@seznam.cz</a></Typography>
                    {/* <Typography style={{textAlign:"right",  fontSize: "0.8rem", color: "white", fontWeight: 100}}>TEL <a target="_blank" style={{ color: "white" }} href="tel:+420 605 575 031">+420 605 575 031</a></Typography> */}
                </div>

            </footer>
        </>
    )
}

export default Layout