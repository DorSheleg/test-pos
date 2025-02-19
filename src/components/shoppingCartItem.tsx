import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
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
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
  barcode,
  onRemove,
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
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        ₪{price.toFixed(2)}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2">{name}</Typography>
        <Typography variant="caption" color={colors.secondary}>
          {barcode}
        </Typography>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            cursor: "pointer",
            position: "relative",
          }}
          onClick={() => setShowDelete(!showDelete)}
        />
      </Box>
      {showDelete && (
        <IconButton
          onClick={() => onRemove(id)}
          sx={{ backgroundColor: colors.error, color: "white" }}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ShoppingCartItem;
