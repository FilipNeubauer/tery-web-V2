import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export interface StyleSheet {
    [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
    content: {
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // overflow: "hidden",
        // height: "100vh"
        backgroundImage: "url(src/pages/home/assets/IMG_3316.jpeg)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    main: {
        minHeight: "100vh"
    },
    textContent: {
        color: "white",
        textAlign: "center"
    },
}

const Home = () => {



    return (
        <div style={styles.main}>
            <div style={styles.content}>
                {/* <img src="src/pages/home/assets/IMG_3316.jpeg" h /> */}
                <div style={styles.textContent}>
                    <Typography style={{ fontFamily: "Playfair Display", fontSize: "3rem" }}>TEREZA STOKLASOVÁ</Typography>
                    <Typography variant="h3" style={{ paddingTop: "1rem", fontFamily: "Roboto", fontWeight: 100, fontSize: "1.5rem"}}>@tery_stoklasova</Typography>
                    <Typography variant="h3" style={{ paddingTop: "0.5rem", fontFamily: "Roboto", fontWeight: 100, fontSize: "1.5rem"}}>@terysphotos</Typography>
                    <Typography variant="h2" style={{ paddingTop: "1rem", fontFamily: "Roboto", fontWeight: 100, fontSize: "2rem"}}>photographer & art director</Typography>
                </div>
            </div>
        </div>
    )
}

export default Home;
