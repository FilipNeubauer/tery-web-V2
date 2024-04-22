import { Dialog, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

// IMAGES
import IMG_9866 from "./assets/IMG_9866.jpg";
import IMG_0180 from "./assets/IMG_0180.jpg";

import IMG_9781 from "./assets/IMG_9781.jpg";


import IMG_6238 from "./assets/IMG_6238.jpg";
import IMG_9976 from "./assets/IMG_9976.jpg";
import IMG_9976_2 from "./assets/IMG_9976_2.jpg";
import IMG_9953 from "./assets/IMG_9953.jpg";
import IMG_9083 from "./assets/IMG_9083.jpg";
import IMG_9532 from "./assets/IMG_9532.jpg";
import IMG_0127 from "./assets/IMG_0127.jpg";
import IMG_0111 from "./assets/IMG_0111.jpg";
import IMG_0182 from "./assets/IMG_0182.jpg";
import IMG_9893 from "./assets/IMG_9893.jpg";

import IMG_6216 from "./assets/IMG_6216.jpg";
import IMG_5205 from "./assets/IMG_5205.jpg";
import { useState } from "react";
import { IMG } from "../../portfolio/portfolio";


const WearOfAbsolue = () => {

    const images = [
        {
            row: [
                {
                    src: IMG_9866
                },
                {
                    src: IMG_0180
                },
                {
                    src: IMG_9781
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_6238
                },
                {
                    src: IMG_9976
                },
                {
                    src: IMG_9976_2
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_9953
                },
                {
                    src: IMG_9083
                },
                {
                    src: IMG_0111
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_9532
                },
                {
                    src: IMG_0127
                },
                {
                    src: IMG_6216
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_0182
                },
                {
                    src: IMG_9893
                },
                {
                    src: IMG_5205
                }
            ]
        }
    ]

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
        <div style={{ padding: "0 1rem"}}>

            <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"}}>Wear of Absolue</Typography>
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
                                                    <TableCell onClick={() => handleChange(i, j)} style={{ lineHeight: 0, padding: "0.3rem" }} sx={{ borderBottom: "none"}}>
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

            <Dialog open={open} onClose={() => setOpen(false)} style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} PaperProps={{ style: { overflowY: "hidden", }}} sx={{ overflowY: "hidden"}}>
                <div style={{ height: "100%", width: "4rem", position: "absolute" }} onClick={hanldeBack}></div>
                    <img src={img?.src} style={{ width: "100%" }} />
                <div style={{ height: "100%", width: "4rem", position: "absolute", right: 0 }} onClick={hanldeNext}></div>
            </Dialog>
        </div>
    )
}

export default WearOfAbsolue;