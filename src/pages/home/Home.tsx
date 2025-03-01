// import image from "./assets/IMG_3316.jpeg";
import { useEffect, useState } from "react";
// import Logo from "./assets/logo.svg"
//
import LogoIcon from "./assets/logo.svg";
import { colors } from "../../consts/colors";

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
    backgroundImage: `url(https://ik.imagekit.io/rc0aoecf7/home/IMG_3316.jpeg)`,
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
  const [, setIsWideScreen] = useState(window.innerWidth > 1200);

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
          THE JOURNEY
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
          Tereza is a Prague freelance photographer specializing in fashion
          editorials, portraiture, and event documentation. Her work captures
          individuality and emotion through a refined yet expressive lens,
          blending modern aesthetics with cinematic lighting, rich contrasts,
          and a strong editorial sensibility.
          <br />
          <br /> Her earliest memory of photography is watching her mother take
          pictures with a small Nikon camera. One she wished for so much that
          she asked for the same on her seventh birthday. Over time, this
          fascination turned into passion, but it was a close friend who first
          convinced her to take it seriously, always pointing out her natural
          eye for striking imagery. <br />
          <br /> In 2022, she founded Absolue Agency, creating a platform for
          unique looking models and fostering diversity in the industry. Over
          time, her focus shifted toward independent creative work, leading to
          the launch of Azeret Studios in 2025. With this new venture, she fully
          embraces her personal artistic vision, continuously pushing creative
          boundaries and exploring new ways to tell stories through her lens.
        </p>
      </div>
    </div>
  );
};

export default Home;
