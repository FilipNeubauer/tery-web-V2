import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

// Images
import IMG_3337 from "./assets/IMG_3337.jpg";
import IMG_6458 from "./assets/IMG_6458.jpg";
import IMG_6388 from "./assets/IMG_6388.jpg";
import IMG_5360 from "./assets/IMG_5360.jpg";
import IMG_9893 from "./assets/IMG_9893.jpg";
import IMG_2400 from "./assets/IMG_2400.jpg";
import IMG_4872 from "./assets/IMG_4872.jpg";
import IMG_9736 from "./assets/IMG_9736.jpg";
import IMG_4920 from "./assets/IMG_4920.jpg";
import IMG_5364 from "./assets/IMG_5364.jpg";
import IMG_5147 from "./assets/IMG_5147.jpg";
import IMG_5327 from "./assets/IMG_5327.jpg";
import IMG_0680 from "./assets/IMG_0680.jpg";
import IMG_9976 from "./assets/IMG_9976.jpg";
import IMG_0810 from "./assets/IMG_0810.jpg";
import IMG_7419 from "./assets/IMG_7419.jpg";
import IMG_0438 from "./assets/IMG_0438.jpg";
import IMG_7420 from "./assets/IMG_7420.jpg";

const Portfolio = () => {

    const images = [
        {
            row: [
                {
                    src: IMG_3337
                },
                {
                    src: IMG_6458
                },
                {
                    src: IMG_6388
                }
            ]
        },
        {
            row: [
                {
                    src: IMG_5360
                },
                {
                    src: IMG_9893
                },
                {
                    src: IMG_2400
                },
            ]
        },
        {
            row: [
                {
                    src: IMG_4872
                },
                {
                    src: IMG_9736
                },
                {
                    src: IMG_4920
                },
            ]
        },
        {
            row: [
                {
                    src: IMG_5364
                },
                {
                    src: IMG_5147
                },
                {
                    src: IMG_5327
                },
            ]
        },
        {
            row: [
                {
                    src: IMG_0680
                },
                {
                    src: IMG_9976
                },
                {
                    src: IMG_0810
                },
            ]
        },
        {
            row: [
                {
                    src: IMG_7419
                },
                {
                    src: IMG_0438
                },
                {
                    src: IMG_7420
                }
            ]
        }

    ]


    return (
        <div>
            <h1>PORTFOLIO</h1>
            
            <TableContainer>
                <Table>
                    <TableBody>
                        {
                            images.map(({ row }) => {
                                return (
                                    <TableRow>
                                        {
                                            row.map(({ src }) => {
                                                return (
                                                    <TableCell sx={{ borderBottom: "none"}}>
                                                        <img src={src} height={300} />
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