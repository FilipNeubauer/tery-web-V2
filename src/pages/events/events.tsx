import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { IMG } from "../portfolio/portfolio";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageDialog from "../../components/imageDialog";
import { getOptimizedImageUrl } from "../../utils/resizeImg";

const Events = () => {
  const images = [
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_1249.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_1251.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_1260.jpeg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_8780.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_8779.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_8771.jpeg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_8783.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_8776.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_8777.jpeg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_0676.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_0719.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_0689.jpeg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_0705.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_0666.jpeg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_0727.jpeg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_1790_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_1798_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_1813_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_5873_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_5856_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_5791_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_3941_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_3786_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_3781_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_5877_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_5782_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_5800_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_9596_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_9574_2.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_9591_2.jpg",
        },
      ],
    },
    {
      row: [
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_3760.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_3933.jpg",
        },
        {
          src: "https://ik.imagekit.io/rc0aoecf7/events/IMG_3785.jpg",
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
                          src={getOptimizedImageUrl(src)}
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
