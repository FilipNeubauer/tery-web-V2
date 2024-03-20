import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { images } from "./photos";

const LashStudio = () => {

    return(
        <div style={{ padding: "0 1rem"}}>

        <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"}}>Lash Studio</Typography>
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
                                                <TableCell style={{ lineHeight: 0, padding: "0.3rem" }} sx={{ borderBottom: "none"}}>
                                                    <img src={src} width={"100%"} />
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

export default LashStudio;