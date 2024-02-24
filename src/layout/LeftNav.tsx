import { Typography } from "@mui/material";
import { StyleSheet } from "../pages/home/Home";
import NavList from "./NavList";

const LeftNav = () => {

    const styles: StyleSheet = {
        navbar: {
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "250px",
            backgroundColor: "rgba(28,28,28,1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    }

    return (
        <section style={styles.navbar}>
            <Typography style={{marginTop: "5rem"}} fontFamily={"Roboto"} fontSize={"1.5rem"} color={"white"}>@tery_stoklasova</Typography>
            <NavList open={false} setOpen={() => {}} />
        </section>
    )
}

export default LeftNav;