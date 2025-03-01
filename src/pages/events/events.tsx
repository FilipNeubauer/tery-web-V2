import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { useState } from "react";
import { IMG } from "../portfolio/portfolio";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageDialog from "../../components/imageDialog";

const Events = () => {
  const images = [
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_1249.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_1251.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_1260.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_8780.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_8779.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_8771.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_8783.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_8776.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_8777.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_0676.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_0719.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_0689.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_0705.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_0666.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_0727.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_1790_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_1798_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_1813_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_5873_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_5856_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_5791_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_3941_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_3786_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_3781_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_5877_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_5782_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_5800_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_9596_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_9574_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_9591_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_3760.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_3933.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/portfolio/IMG_3785.jpg",
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

  const handleNext = () => {
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

  const handleBack = () => {
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
                        <LazyLoadImage
                          threshold={500}
                          effect="blur"
                          src={src}
                          width="100%"
                          loading="eager"
                          style={{ width: "100%", minHeight: 100 }}
                          visibleByDefault={false}
                        />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <ImageDialog
        onClose={() => setOpen(false)}
        open={open}
        pressBack={handleBack}
        pressNext={handleNext}
        img={img?.src}
      />
    </div>
  );
};

export default Events;
