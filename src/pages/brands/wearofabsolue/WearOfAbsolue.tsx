import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

// IMAGES
import IMG_9866 from "./assets/IMG_9866.jpg";
import IMG_0180 from "./assets/IMG_0180.jpg";

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

            ]
        }
    ]

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
                            images.map(({ row }) => {
                                return (
                                    <TableRow>
                                        {
                                            row.map(({ src }) => {
                                                return (
                                                    <TableCell sx={{ borderBottom: "none"}}>
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

export default WearOfAbsolue;