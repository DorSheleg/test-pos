import React from "react";
import { Box, Grid } from "@mui/material";
import MenuItem from "./menuItem";
import { Product } from "../types/globalTypes";

interface ItemsGridProps {
  items: Product[];
  selectedCategory: number;
  onItemClick: (item: Product) => void;
}

const ItemsGrid: React.FC<ItemsGridProps> = ({
  items,
  selectedCategory,
  onItemClick,
}) => {
  return (
    <Box
      sx={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)", padding: 2 }}
    >
      <Grid container spacing={2} justifyContent="center">
        {items
          .filter((item) => item.category_id === selectedCategory)
          .map((item) => (
            <Grid item key={item.id} xs={6} sm={4} md={3} lg={2}>
              <MenuItem
                image={item.image_url}
                name={item.name}
                price={item.price}
                onClick={() => onItemClick(item)}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ItemsGrid;
