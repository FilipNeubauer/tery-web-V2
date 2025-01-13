import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

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
import IMG_1249 from "./assets/IMG_1249.jpeg";
import IMG_1251 from "./assets/IMG_1251.jpeg";
import IMG_1260 from "./assets/IMG_1260.jpeg";
import IMG_8780 from "./assets/IMG_8780.jpeg";
import IMG_8771 from "./assets/IMG_8771.jpeg";
import IMG_8779 from "./assets/IMG_8779.jpeg";
import IMG_0689 from "./assets/IMG_0689.jpeg";
import IMG_0719 from "./assets/IMG_0719.jpeg";
import IMG_0676 from "./assets/IMG_0676.jpeg";
import IMG_0727 from "./assets/IMG_0727.jpeg";
import IMG_0666 from "./assets/IMG_0666.jpeg";
import IMG_0705 from "./assets/IMG_0705.jpeg";
import IMG_3760 from "./assets/IMG_3760.jpeg";
import IMG_3933 from "./assets/IMG_3933.jpeg";
import IMG_3785 from "./assets/IMG_3785.jpeg";
import IMG_8776 from "./assets/IMG_8776.jpeg";
import IMG_8777 from "./assets/IMG_8777.jpeg";
import IMG_8783 from "./assets/IMG_8783.jpeg";
import { useState } from "react";
import { IMG } from "../portfolio/portfolio";

const Events = () => {
  const images = [
    {
      row: [
        {
          src: IMG_1249,
        },
        {
          src: IMG_1251,
        },
        {
          src: IMG_1260,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_8780,
        },
        {
          src: IMG_8779,
        },
        {
          src: IMG_8771,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_8783,
        },
        {
          src: IMG_8776,
        },
        {
          src: IMG_8777,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_0676,
        },
        {
          src: IMG_0719,
        },
        {
          src: IMG_0689,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_0705,
        },
        {
          src: IMG_0666,
        },
        {
          src: IMG_0727,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_1790_2,
        },
        {
          src: IMG_1798_2,
        },
        {
          src: IMG_1813_2,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_5873_2,
        },
        {
          src: IMG_5856_2,
        },
        {
          src: IMG_5791_2,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_3941_2,
        },
        {
          src: IMG_3786_2,
        },
        {
          src: IMG_3781_2,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_5877_2,
        },
        {
          src: IMG_5782_2,
        },
        {
          src: IMG_5800_2,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_9596_2,
        },
        {
          src: IMG_9574_2,
        },
        {
          src: IMG_9591_2,
        },
      ],
    },
    {
      row: [
        {
          src: IMG_3760,
        },
        {
          src: IMG_3933,
        },
        {
          src: IMG_3785,
        },
      ],
    },
  ];

  const [open, setOpen] = useState(false);

  const [img, setImg] = useState<IMG>();

  const handleChange = (row: number, index: number) => {
    const obj = {
      src: images[row].row[index].src,
      index,
      row,
    };
    setImg(obj);
    setOpen(true);
  };

  const hanldeNext = () => {
    if (img) {
      const newObj = {
        ...img,
      };

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
  };

  const hanldeBack = () => {
    if (img) {
      const newObj = {
        ...img,
      };

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
  };

  return (
    <div style={{ padding: "2rem 1rem 1rem" }}>
      {/* <Typography variant="h1" style={{ margin: "1rem", textAlign: "center", fontFamily: "Playfair Display", fontSize: "3rem"  }}>Events</Typography> */}

      <TableContainer>
        <Table>
          <colgroup>
            <col style={{ width: `${100 / 3}%` }}></col>
            <col style={{ width: `${100 / 3}%` }}></col>
            <col style={{ width: `${100 / 3}%` }}></col>
          </colgroup>
          <TableBody>
            {images.map(({ row }, i) => {
              return (
                <TableRow>
                  {row.map(({ src }, j) => {
                    return (
                      <TableCell
                        onClick={() => handleChange(i, j)}
                        style={{ lineHeight: 0, padding: "0.3rem" }}
                        sx={{ borderBottom: "none" }}
                      >
                        <img src={src} width="100%" />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        PaperProps={{ style: { overflowY: "hidden" } }}
        sx={{ overflowY: "hidden" }}
      >
        <div
          style={{ height: "100%", width: "4rem", position: "absolute" }}
          onClick={hanldeBack}
        ></div>
        <img src={img?.src} style={{ width: "100%" }} />
        <div
          style={{
            height: "100%",
            width: "4rem",
            position: "absolute",
            right: 0,
          }}
          onClick={hanldeNext}
        ></div>
      </Dialog>
    </div>
  );
};

export default Events;
