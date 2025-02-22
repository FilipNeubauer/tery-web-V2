// import image from "./assets/IMG_3316.jpeg";
import { useEffect, useState } from "react";
// import Logo from "./assets/logo.svg"
//
import LogoIcon from "./assets/logo.svg";
import { colors } from "../../consts/colors";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <div style={styles.textContent}>
          <img
            color="white"
            src={LogoIcon}
            alt="Logo"
            style={{ width: "100%", maxWidth: "500px", height: "auto" }}
          />
          {/* <Typography
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
          </Typography> */}
        </div>
      </div>

      <div
        style={{
          marginTop: "4rem",
        }}
      >
        <p
          style={{
            margin: "0.7rem 2rem",
            textAlign: "left",
            fontFamily: "Times New Roman",
            fontSize: "1.2rem",
            color: colors.black,
            fontWeight: "normal",
          }}
        >
          Tereza Stoklasová
        </p>
        <p
          style={{
            margin: "0 0",
            maxWidth: "30rem",
            padding: "0 2rem",
            fontFamily: "Times New Roman",
            fontSize: "0.9rem",
            fontWeight: "lighter",
            lineHeight: "1.1rem",
            color: colors.black,
          }}
        >
          I’m a photographer based in Prague focusing on fashion, models,
          lifestyle, and events. I’m passionate about creative projects and open
          to any concept. Let’s bring your vision to life!
        </p>
      </div>
    </div>
  );
};

export default Home;
