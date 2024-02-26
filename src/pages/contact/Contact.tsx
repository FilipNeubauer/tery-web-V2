import { Typography } from "@mui/material";

const Contact = () => {

    return (
        <div>
            <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"}}>Contact</Typography>

            <div style={{ margin: "2rem", marginBottom: "30rem"}}>
                <Typography style={{ paddingBottom: "0.5rem" ,  textAlign:"left", fontSize: "1rem", color: "rgba(28,28,28,1)", fontWeight: 100}}>Tereza Stoklasová</Typography>
                <Typography style={{ paddingBottom: "0.5rem", textAlign:"left", fontSize: "1rem", color: "rgba(28,28,28,1)", fontWeight: 100}}><a style={{ color: "rgba(28,28,28,1)"}} target="_blank" href="https://www.instagram.com/tery_stoklasova/">INSTAGRAM</a></Typography>
                <Typography style={{ paddingBottom: "0.5rem", textAlign:"left", fontSize: "1rem", color: "rgba(28,28,28,1)", fontWeight: 100}}><a style={{ color: "rgba(28,28,28,1)"}} target="_blank" href="mailto:terystoklasova@seznam.cz">terystoklasova@seznam.cz</a></Typography>
                <Typography style={{ paddingBottom: "0.5rem", textAlign:"left",  fontSize: "1rem", color: "rgba(28,28,28,1)", fontWeight: 100}}><a style={{ color: "rgba(28,28,28,1)"}} target="_blank" href="tel:+420 605 575 031">+420 605 575 031</a></Typography>
            </div>

        </div>    
    )
}

export default Contact;