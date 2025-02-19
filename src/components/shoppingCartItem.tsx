import React, { useState } from "react";
import { Box, Typography, IconButton, Badge } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import colors from "../constants/colors";

interface ShoppingCartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  barcode: string;
  onRemove: (id: number) => void;
  rtl?: boolean;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
  barcode,
  onRemove,
  rtl = true,
}) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 1,
        borderBottom: `1px solid ${colors.light}`,
        backgroundColor: showDelete ? colors.error : "transparent",
        transition: "background-color 0.3s",
        flexDirection: rtl ? "row" : "row-reverse",
      }}
    >
      <Badge
        badgeContent={quantity}
        color="success"
        sx={{ cursor: "pointer" }}
        onClick={() => setShowDelete(!showDelete)}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            border: `1px solid ${colors.light}`,
            cursor: "pointer",
            transition: "transform 0.2s",
            transform: showDelete ? "translateX(-40px)" : "none",
          }}
        />
      </Badge>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: rtl ? "flex-start" : "flex-end",
          gap: 0.5,
          textAlign: rtl ? "right" : "left",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: showDelete ? "white" : "black",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="caption"
          color={showDelete ? "white" : colors.secondary}
          fontSize={"18px"}
        >
          {`מק"ט: ${barcode}`}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{ fontWeight: 600, color: showDelete ? "white" : "black" }}
      >
        ₪{price.toFixed(2)}
      </Typography>
      {showDelete && (
        <IconButton
          onClick={() => onRemove(id)}
          sx={{
            backgroundColor: "white",
            color: colors.error,
            borderRadius: 1,
          }}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ShoppingCartItem;
