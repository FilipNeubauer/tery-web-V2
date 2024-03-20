import { Typography } from "@mui/material";

const About = () => {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "90vh"}}>
            <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "2rem", color: "white"}}>ABOUT ME</Typography>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", maxWidth: "70rem", flex: 1, marginBottom: "5rem" }}>
                {/* <img src={IMG} style={{ maxWidth: "40%", padding: "1rem"}} /> */}
                <div>
                    <Typography variant="h1" style={{ margin: "2rem 2rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "2rem", color: "white"}}>Tereza Stoklasová</Typography>
                    <p style={{ maxWidth: "30rem", padding: "2rem", fontFamily: "Roboto", fontSize: "1.2rem", fontWeight: "lighter", lineHeight: "2rem", color: "white"}}>
                    I’m 19 year old photographer living in Prague.
                    My focus is on fashion, models, portraits & events.
                    If you are interested, contact me by email or social media. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;