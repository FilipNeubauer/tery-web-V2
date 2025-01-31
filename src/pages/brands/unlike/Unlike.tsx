import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IMG } from "../../portfolio/portfolio";

const images = [
  {
    row: [
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8356.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8330.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8321.jpeg",
      },
    ],
  },
  {
    row: [
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8153.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8190.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8176.jpeg",
      },
    ],
  },
  {
    row: [
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_7772.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_7735.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_7744.jpeg",
      },
    ],
  },
  {
    row: [
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8046.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8078.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8008.jpeg",
      },
    ],
  },
  {
    row: [
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8208.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8233.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_8247.jpeg",
      },
    ],
  },
  {
    row: [
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_7959.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_7946.jpeg",
      },
      {
        src: "https://imbzpefqojlswzdotwcj.supabase.co/storage/v1/object/public/images/brands/unlike/IMG_7861.jpeg",
      },
    ],
  },
];

const Unlike = () => {
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
        Lash Studio
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
                        <img src={src} width={"100%"} />
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

export default Unlike;
