import { Typography } from "@mui/material";
import { colors } from "../../consts/colors";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Typography
        variant="h1"
        style={{
          margin: "1rem",
          textAlign: "center",
          fontFamily: "Playfair Display",
          fontSize: "1.5rem",
          color: colors.black,
        }}
      >
        Contact
      </Typography>

      <div style={{ margin: "5rem auto" }}>
        <Typography
          style={{
            paddingBottom: "0.5rem",
            textAlign: "left",
            fontSize: "1rem",
            color: colors.black,
            fontWeight: 100,
          }}
        >
          Tereza Stoklasová
        </Typography>
        <Typography
          style={{
            paddingBottom: "0.5rem",
            textAlign: "left",
            fontSize: "1rem",
            color: colors.black,
            fontWeight: 100,
          }}
        >
          <a
            style={{ color: colors.black }}
            target="_blank"
            href="https://www.instagram.com/tery_stoklasova/"
          >
            Instagram
          </a>
        </Typography>
        <Typography
          style={{
            paddingBottom: "0.5rem",
            textAlign: "left",
            fontSize: "1rem",
            color: colors.black,
            fontWeight: 100,
          }}
        >
          <a
            style={{ color: colors.black }}
            target="_blank"
            href="mailto:terystoklasova@seznam.cz"
          >
            terystoklasova@seznam.cz
          </a>
        </Typography>
        {/* <Typography style={{ paddingBottom: "0.5rem", textAlign:"left",  fontSize: "1rem", color: "white", fontWeight: 100}}><a style={{ color: "white"}} target="_blank" href="tel:+420 605 575 031">+420 605 575 031</a></Typography> */}
      </div>
    </div>
  );
};

export default Contact;
