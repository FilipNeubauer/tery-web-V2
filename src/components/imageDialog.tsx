import { Dialog } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  open: boolean;
  onClose: () => void;
  img?: string;
  pressBack: () => void;
  pressNext: () => void;
};

const ImageDialog = ({ img, open, onClose, pressBack, pressNext }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      PaperProps={{ style: { overflowY: "hidden" } }}
      sx={{ overflowY: "hidden", backgroundColor: "transparent" }}
    >
      <LazyLoadImage
        threshold={500}
        effect="blur"
        src={img}
        style={{
          width: "100%",
          backgroundColor: "transparent",
          display: "block", // Removes extra white space
        }}
        visibleByDefault={false}
      />
      <div
        style={{
          height: "100%",
          width: "4rem",
          position: "absolute",
          left: 0,
        }}
        onClick={pressBack}
      />
      <div
        style={{
          height: "100%",
          width: "4rem",
          position: "absolute",
          right: 0,
        }}
        onClick={pressNext}
      />
    </Dialog>
  );
};

export default ImageDialog;
