import { Dialog, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { images } from "./photos";
import { useState } from "react";
import { IMG } from "../../portfolio/portfolio";

const Mayam = () => {

    const [open, setOpen] = useState(false);

    const [img, setImg] = useState<IMG>();

    const handleChange = (row: number, index: number) => {
        const obj = {
            src: images[row].row[index].src,
            index,
            row
        }
        setImg(obj);
        setOpen(true);
    }

    const hanldeNext = () => {
        if (img) {
            const newObj = {
                ...img
            }
        
            if (!(newObj.row >= images.length - 1 && newObj.index >= 2)) {

                if (newObj.index < 2) {
                    newObj.index += 1;
                } else {
                    newObj.index = 0;
                    newObj.row += 1;
                }
            }

            newObj.src = images[newObj.row].row[newObj.index].src;
    
            setImg(newObj);            
        }
    }

    const hanldeBack = () => {
        if (img) {
            const newObj = {
                ...img
            }

            if (!(newObj.row === 0 && newObj.index === 0)) {
                if (newObj.index > 0) {
                    newObj.index -= 1;
                } else {
                    newObj.index = 2;
                    newObj.row -= 1;
                }
            }

            newObj.src = images[newObj.row].row[newObj.index].src;

            setImg(newObj);
        }


    }

    return (
        <div style={{ padding: "0 1rem" }}>   
        <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"}}>Mayam</Typography>
        
        <TableContainer>
            <Table>
                <colgroup>
                    <col style={{ width: `${100/3}%`}}></col>
                    <col style={{ width: `${100/3}%`}}></col>
                    <col style={{ width: `${100/3}%`}}></col>
                </colgroup>
                <TableBody>
                    {
                        images.map(({ row }, i) => {
                            return (
                                <TableRow>
                                    {
                                        row.map(({ src }, j) => {
                                            return (
                                                <TableCell onClick={() => handleChange(i, j)} style={{ lineHeight: 0, padding: "0.3rem" }} sx={{ borderBottom: "none"}} align="center">
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
        
        <Dialog open={open} onClose={() => setOpen(false)} style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} PaperProps={{ style: { overflowY: "hidden", }}} sx={{ overflowY: "hidden"}}>
                <div style={{ height: "100%", width: "4rem", position: "absolute" }} onClick={hanldeBack}></div>
                    <img src={img?.src} style={{ width: "100%" }} />
                <div style={{ height: "100%", width: "4rem", position: "absolute", right: 0 }} onClick={hanldeNext}></div>
            </Dialog>
    </div>
    )
}

export default Mayam;