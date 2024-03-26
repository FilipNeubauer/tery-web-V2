import { Dialog, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

// IMAGES
import IMG_1790_2 from "./assets/IMG_1790_2.jpg";
import IMG_1798_2 from "./assets/IMG_1798_2.jpg";
import IMG_1813_2 from "./assets/IMG_1813_2.jpg";
import IMG_5873_2 from "./assets/IMG_5873_2.jpg";
import IMG_5856_2 from "./assets/IMG_5856_2.jpg";
import IMG_5791_2 from "./assets/IMG_5791_2.jpg";
import IMG_3941_2 from "./assets/IMG_3941_2.jpg";
import IMG_3786_2 from "./assets/IMG_3786_2.jpg";
import IMG_3781_2 from "./assets/IMG_3781_2.jpg";
import IMG_5877_2 from "./assets/IMG_5877_2.jpg";
import IMG_5782_2 from "./assets/IMG_5782_2.jpg";
import IMG_5800_2 from "./assets/IMG_5800_2.jpg";
import IMG_9596_2 from "./assets/IMG_9596_2.jpg";
import IMG_9574_2 from "./assets/IMG_9574_2.jpg";
import IMG_9591_2 from "./assets/IMG_9591_2.jpg";
import { useState } from "react";
import { IMG } from "../portfolio/portfolio";


const Events = () => {

    const images = [
        {
            row: [
                {
                    src: IMG_1790_2
                },
                {
                    src: IMG_1798_2
                },
                {
                    src: IMG_1813_2
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_5873_2
                },
                {
                    src: IMG_5856_2
                },
                {
                    src: IMG_5791_2
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_3941_2
                },
                {
                    src: IMG_3786_2
                },
                {
                    src: IMG_3781_2
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_5877_2
                },
                {
                    src: IMG_5782_2
                },
                {
                    src: IMG_5800_2
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_9596_2
                },
                {
                    src: IMG_9574_2
                },
                {
                    src: IMG_9591_2
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
        <div style={{padding: "2rem 1rem 1rem"}}>
            {/* <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"  }}>Events</Typography> */}
            
            <TableContainer >
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
                                                    <TableCell onClick={() => handleChange(i, j)} style={{ lineHeight: 0, padding: "0.3rem"}} sx={{ borderBottom: "none"}}>
                                                        <img src={src} width="100%" />
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

            <Dialog open={open} onClose={() => setOpen(false)}>
                <div style={{ height: "100%", width: "4rem", position: "absolute" }} onClick={hanldeBack}></div>
                    <img src={img?.src} />
                <div style={{ height: "100%", width: "4rem", position: "absolute", right: 0 }} onClick={hanldeNext}></div>
            </Dialog>
        </div>
    )
}

export default Events;