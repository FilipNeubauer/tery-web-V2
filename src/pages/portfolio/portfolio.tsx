import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { images } from "./photos";

// Images


const Portfolio = () => {

    


    return (
        <div style={{ padding: "0 1rem" }}>   
            <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"}}>Portfolio</Typography>
            
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
                                                    <TableCell sx={{ borderBottom: "none"}} align="center">
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