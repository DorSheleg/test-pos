import React from "react";
import { Button, Typography } from "@mui/material";
import colors from "../constants/colors";

interface PayButtonProps {
  price: number;
  onClick: () => void;
}

const PayButton: React.FC<PayButtonProps> = ({ price, onClick }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: colors.primary,
        color: "white",
        fontWeight: 600,
        borderRadius: "8px",
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
        minHeight: "75px",
      }}
    >
      <Typography variant="h5" sx={{ fontSize: "28px" }}>
        לתשלום
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "28px" }}>
        ₪{price.toFixed(2)}
      </Typography>
    </Button>
  );
};

export default PayButton;
