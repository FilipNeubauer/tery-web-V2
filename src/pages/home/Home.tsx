import { Typography } from "@mui/material";
// import image from "./assets/IMG_3316.jpeg";
import { useEffect, useState } from "react";

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
    backgroundImage: `url(https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/home/IMG_3316.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // "-webkit-background-size": "cover",
    // "-moz-background-size": "cover",
    // "-o-background-size": "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    minHeight: "100vh",
  },
  textContent: {
    color: "white",
    textAlign: "center",
    marginTop: "8rem",
  },
};

const Home = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.main}>
      <div style={styles.content}>
        {/* <img src="src/pages/home/assets/IMG_3316.jpeg" h /> */}
        <div style={styles.textContent}>
          <Typography
            style={{
              fontFamily: "Playfair Display",
              fontSize: isWideScreen ? "2rem" : "1.7rem",
            }}
          >
            TEREZA STOKLASOVÁ
          </Typography>
          <Typography
            variant="h3"
            style={{
              paddingTop: "0.7rem",
              fontFamily: "Roboto",
              fontWeight: 100,
              fontSize: isWideScreen ? "1.2rem" : "0.9rem",
            }}
          >
            @tery_stoklasova @terysphotos
          </Typography>
          {/* <Typography variant="h3" style={{ paddingTop: "0.5rem", fontFamily: "Roboto", fontWeight: 100, fontSize: "1.5rem"}}></Typography> */}
          <Typography
            variant="h2"
            style={{
              paddingTop: "0.7rem",
              fontFamily: "Roboto",
              fontWeight: 100,
              fontSize: isWideScreen ? "1.2rem" : "0.9rem",
            }}
          >
            photographer & art director
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
