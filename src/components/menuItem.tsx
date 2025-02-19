import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface MenuItemProps {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ image, name, price, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 165,
        height: 150,
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        boxShadow: 3,
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.6)",
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2">₪ {price.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
