import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../consts/colors";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
            <LazyLoadImage
              threshold={500}
              loading="eager"
              effect="blur"
              src={
                "https://ik.imagekit.io/rc0aoecf7/wearofabsolue/IMG_9866.jpg"
              }
              style={{ width: "100%", minHeight: 100 }}
              visibleByDefault={false}
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
            Wear of Absolue
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/loice"}>
            <LazyLoadImage
              threshold={500}
              loading="eager"
              effect="blur"
              src={"https://ik.imagekit.io/rc0aoecf7/loice/IMG_7464.jpg"}
              style={{ width: "100%", minHeight: 100 }}
              visibleByDefault={false}
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
            Loice
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/footshop"}>
            <LazyLoadImage
              threshold={500}
              loading="eager"
              effect="blur"
              src={"https://ik.imagekit.io/rc0aoecf7/footshop/IMG_7149.jpeg"}
              style={{ width: "100%", minHeight: 100 }}
              visibleByDefault={false}
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
            <LazyLoadImage
              threshold={500}
              loading="eager"
              effect="blur"
              src={"https://ik.imagekit.io/rc0aoecf7/unlike/IMG_8356.jpeg"}
              style={{ width: "100%", minHeight: 100 }}
              visibleByDefault={false}
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

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/lashstudio"}>
            <LazyLoadImage
              threshold={500}
              loading="eager"
              effect="blur"
              src={"https://ik.imagekit.io/rc0aoecf7/lash-studio/IMG_5147.jpg"}
              style={{ width: "100%", minHeight: 100 }}
              visibleByDefault={false}
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
            Lash Studio
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/conceptflannel"}>
            <LazyLoadImage
              threshold={500}
              loading="eager"
              src={"https://ik.imagekit.io/rc0aoecf7/assets/IMG_6945.jpg"}
              style={{ width: "100%", minHeight: 100 }}
              visibleByDefault={false}
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
            Concept Flannel
          </Typography>
        </div>

        <div style={{ maxWidth: "20rem", padding: "1rem" }}>
          <Link to={"/brands/mayam"}>
            <LazyLoadImage
              threshold={500}
              loading="eager"
              effect="blur"
              src={"https://ik.imagekit.io/rc0aoecf7/mayam/IMG_0679.jpg"}
              style={{ width: "100%", minHeight: 100 }}
              visibleByDefault={false}
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
            Mayam
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Brands;
