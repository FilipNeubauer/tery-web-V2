import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IMG } from "../../portfolio/portfolio";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageDialog from "../../../components/imageDialog";
import { getOptimizedImageUrl } from "../../../utils/resizeImg";

const images = [
  {
    row: [
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_7145.JPG",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_7292.jpeg",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_7149.jpeg",
      },
    ],
  },
  {
    row: [
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_7115.JPG",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_7103.JPG",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_7079.JPG",
      },
    ],
  },
  {
    row: [
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_5901.jpg",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_5903.jpg",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_5904.jpg",
      },
    ],
  },
  {
    row: [
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_5906.jpeg",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_5907.jpg",
      },
      {
        src: "https://ik.imagekit.io/rc0aoecf7/footshop/IMG_5908.jpg",
      },
    ],
  },
];

const Footshop = () => {
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
    <div style={{ padding: "0 1rem" }}>
      <Typography
        variant="h1"
        style={{
          margin: "1rem",
          textAlign: "center",
          fontFamily: "Playfair Display",
          fontSize: "3rem",
        }}
      >
        Footshop
      </Typography>
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
                <TableRow key={i}>
                  {row.map(({ src }, j) => {
                    return (
                      <TableCell
                        key={src}
                        onClick={() => handleChange(i, j)}
                        style={{ lineHeight: 0, padding: "0.3rem" }}
                        sx={{ borderBottom: "none" }}
                      >
                        <LazyLoadImage
                          threshold={500}
                          loading="eager"
                          effect="blur"
                          src={getOptimizedImageUrl(src)}
                          width={"100%"}
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

export default Footshop;
