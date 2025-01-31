import { Typography } from "@mui/material";
import IMG_9866 from "./wearofabsolue/assets/IMG_9866.jpg";
import IMG_5147 from "./lash-studio/assets/IMG_5147.jpg";
import IMG_6945 from "./concept-flannel/assets/IMG_6945.jpg";
import IMG_0679 from "./mayam/assets/IMG_0679.jpg";
import IMG_7464 from "./loice/assets/IMG_7464.jpg";
import { Link } from "react-router-dom";
import { colors } from "../../consts/colors";

const Brands = () => {
  return (
    <div
      style={{
        padding: "2rem 5rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"}}>Brands</Typography> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "44rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/wearofabsolue"}>
            <img src={IMG_9866} style={{ width: "100%" }} />
          </Link>
          <Typography
            variant="h2"
            style={{
              margin: "1rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              color: colors.black,
            }}
          >
            Wear of Absolue
          </Typography>
        </div>
        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/lashstudio"}>
            <img src={IMG_5147} style={{ width: "100%" }} />
          </Link>
          <Typography
            variant="h2"
            style={{
              margin: "1rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              color: colors.black,
            }}
          >
            Lash Studio
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/loice"}>
            <img src={IMG_7464} style={{ width: "100%" }} />
          </Link>
          <Typography
            variant="h2"
            style={{
              margin: "1rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              color: colors.black,
            }}
          >
            Loice
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/conceptflannel"}>
            <img src={IMG_6945} style={{ width: "100%" }} />
          </Link>
          <Typography
            variant="h2"
            style={{
              margin: "1rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              color: colors.black,
            }}
          >
            Concept Flannel
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/mayam"}>
            <img src={IMG_0679} style={{ width: "100%" }} />
          </Link>
          <Typography
            variant="h2"
            style={{
              margin: "1rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              color: colors.black,
            }}
          >
            Mayam
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/footshop"}>
            <img
              src={
                "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/footshop/IMG_7149.jpeg"
              }
              style={{ width: "100%" }}
            />
          </Link>
          <Typography
            variant="h2"
            style={{
              margin: "1rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              color: colors.black,
            }}
          >
            Footshop
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/unlike"}>
            <img
              src={
                "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8356.jpeg"
              }
              style={{ width: "100%" }}
            />
          </Link>
          <Typography
            variant="h2"
            style={{
              margin: "1rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              color: colors.black,
            }}
          >
            Unlike
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Brands;
