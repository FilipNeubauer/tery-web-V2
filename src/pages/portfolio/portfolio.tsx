import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { images } from "./photos";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageDialog from "../../components/imageDialog";
import { getOptimizedImageUrl } from "../../utils/resizeImg";

export type IMG = {
  src: string;
  index: number;
  row: number;
};

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<IMG>();

  const handleChange = (row: number, index: number) => {
    setImg({ src: images[row].row[index].src, index, row });
    setOpen(true);
  };

  const handleNext = () => {
    if (img) {
      let newRow = img.row;
      let newIndex = img.index;

      if (!(newRow >= images.length - 1 && newIndex >= 2)) {
        if (newIndex < 2) {
          newIndex += 1;
        } else {
          newIndex = 0;
          newRow += 1;
        }
      }

      setImg({
        row: newRow,
        index: newIndex,
        src: images[newRow].row[newIndex].src,
      });
    }
  };

  const handleBack = () => {
    if (img) {
      let newRow = img.row;
      let newIndex = img.index;

      if (!(newRow === 0 && newIndex === 0)) {
        if (newIndex > 0) {
          newIndex -= 1;
        } else {
          newIndex = 2;
          newRow -= 1;
        }
      }

      setImg({
        row: newRow,
        index: newIndex,
        src: images[newRow].row[newIndex].src,
      });
    }
  };

  return (
    <div style={{ padding: "2rem 1rem 1rem" }}>
      <TableContainer>
        <Table>
          <colgroup>
            <col style={{ width: "33%" }} />
            <col style={{ width: "33%" }} />
            <col style={{ width: "33%" }} />
          </colgroup>
          <TableBody>
            {images.map(({ row }, i) => (
              <TableRow key={i}>
                {row.map(({ src }, j) => (
                  <TableCell
                    key={`${i}-${j}`}
                    onClick={() => handleChange(i, j)}
                    style={{ lineHeight: 0, padding: "0.3rem" }}
                    sx={{ borderBottom: "none" }}
                    align="center"
                  >
                    <LazyLoadImage
                      threshold={500}
                      effect="blur"
                      src={getOptimizedImageUrl(src)}
                      style={{ width: "100%", minHeight: 100 }}
                      visibleByDefault={false}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
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

export default Portfolio;
