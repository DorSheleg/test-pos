import React from "react";
import { Card, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import colors from "../constants/colors";
import PayButton from "./payButton";
import { Product } from "../types/globalTypes";

interface ShoppingCartProps {
  items: Product[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onRemove,
  onCheckout,
}) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Card
        sx={{
          backgroundColor: colors.background,
          padding: 2,
          borderRadius: "12px",
          minHeight: "75vh",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: colors.primary, fontWeight: 600, marginBottom: 2 }}
        >
          סל קניות
        </Typography>
        <Box>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 1,
                borderBottom: `1px solid ${colors.light}`,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                ₪{item.price.toFixed(2)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="caption" color={colors.secondary}>
                  {item.barcode}
                </Typography>
                <Box
                  component="img"
                  src={item.image_url}
                  alt={item.name}
                  sx={{ width: 40, height: 40, borderRadius: 1 }}
                />
              </Box>
              <IconButton
                onClick={() => onRemove(item.id)}
                sx={{ backgroundColor: colors.error, color: "white" }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <PayButton price={total} onClick={onCheckout} />
      </Box>
    </>
  );
};

export default ShoppingCart;
