import React, { useEffect, useState } from "react";
import { Card, Typography, Box, Grid } from "@mui/material";
import colors from "../constants/colors";
import PayButton from "./payButton";
import ShoppingCartItem from "./shoppingCartItem";
import { Product } from "../types/globalTypes";
import ClearCart from "../images/clear_cart.png";

interface ShoppingCartProps {
  items: Product[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
  clearCart: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onRemove,
  onCheckout,
  clearCart,
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
        <Grid container>
          <Grid item xs={10}>
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
          </Grid>
          <Grid item xs={2}>
            <Box
              component="img"
              src={ClearCart}
              onClick={clearCart}
              sx={{
                width: 58,
                height: 58,
                borderRadius: 1,
                border: `1px solid ${colors.light}`,
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            />
          </Grid>
        </Grid>
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
        <PayButton
          price={total}
          onClick={onCheckout}
          disabled={items.length < 1}
        />
      </Box>
    </>
  );
};

export default ShoppingCart;
