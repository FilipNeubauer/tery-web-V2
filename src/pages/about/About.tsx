import { Typography } from "@mui/material";

const About = () => {

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "90vh", marginTop: "4rem"}}>
            <Typography variant="h1" style={{ margin: "2rem", textAlign: "left", fontFamily: "Playfair Display", fontSize: "2rem", color: "white"}}>ABOUT ME</Typography>
            <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "70rem", flex: 1 }}>
                {/* <img src={IMG} style={{ maxWidth: "40%", padding: "1rem"}} /> */}
                <div>
                    <p style={{ margin: "0.7rem 2.5rem", textAlign: "left", fontFamily: "Times New Roman", fontSize: "1.2rem", color: "white", fontWeight: "normal"}}>Tereza Stoklasová</p>
                    <p style={{ margin: "0 0", maxWidth: "30rem", padding: "0 2rem", fontFamily: "Times New Roman", fontSize: "0.9rem", fontWeight: "lighter", lineHeight: "1.1rem", color: "white"}}>
                    I’m 19 year old photographer living in Prague.
                    </p>
                    <p style={{ margin: "0 0", maxWidth: "30rem", padding: "0 2rem", fontFamily: "Times New Roman", fontSize: "0.9rem", fontWeight: "lighter", lineHeight: "1.1rem", color: "white"}}>
                        My focus is on fashion, models, portraits & events.
                    </p>
                    <p style={{ margin: "0 0", maxWidth: "30rem", padding: "0 2rem", fontFamily: "Times New Roman", fontSize: "0.9rem", fontWeight: "lighter", lineHeight: "1.1rem", color: "white"}}>
                        If you are interested, contact me by email or social media. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;