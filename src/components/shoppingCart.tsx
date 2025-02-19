import React, { useEffect, useState } from "react";
import { Card, Typography, Box } from "@mui/material";
import colors from "../constants/colors";
import PayButton from "./payButton";
import ShoppingCartItem from "./shoppingCartItem";
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
  const [cartItems, setCartItems] = useState<Product[]>(items);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Card
        sx={{
          backgroundColor: "white",
          padding: 2,
          borderRadius: "12px",
          minHeight: "75vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: colors.primary,
            fontWeight: 600,
            marginBottom: 2,
            textAlign: "right",
            fontSize: "28px",
          }}
        >
          סל קניות
        </Typography>
        <Box>
          {cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              image={item.image_url}
              barcode={item.barcode}
              onRemove={onRemove}
              rtl={true} // Ensure RTL alignment
            />
          ))}
        </Box>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
          flexDirection: "row-reverse", // Align PayButton to the right
        }}
      >
        <PayButton price={total} onClick={onCheckout} />
      </Box>
    </>
  );
};

export default ShoppingCart;
