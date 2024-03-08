import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { images } from "./photos";

// Images


const Portfolio = () => {

    


    return (
        <div style={{ padding: "2rem 1rem 1rem" }}>   
            {/* <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"}}>Portfolio</Typography> */}
            
            <TableContainer>
                <Table>
                    <colgroup>
                        <col style={{ width: `${100/3}%`}}></col>
                        <col style={{ width: `${100/3}%`}}></col>
                        <col style={{ width: `${100/3}%`}}></col>
                    </colgroup>
                    <TableBody>
                        {
                            images.map(({ row }) => {
                                return (
                                    <TableRow>
                                        {
                                            row.map(({ src }) => {
                                                return (
                                                    <TableCell style={{ lineHeight: 0, padding: "0.3rem" }} sx={{ borderBottom: "none"}} align="center">
                                                        <img src={src} style={{ width: "100%"}} />
                                                    </TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Portfolio;