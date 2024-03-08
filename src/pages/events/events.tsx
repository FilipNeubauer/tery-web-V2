import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

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
                            images.map(({ row }) => {
                                return (
                                    <TableRow>
                                        {
                                            row.map(({ src }) => {
                                                return (
                                                    <TableCell style={{ lineHeight: 0, padding: "0.3rem"}} sx={{ borderBottom: "none"}}>
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
        </div>
    )
}

export default Events;