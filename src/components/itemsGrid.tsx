import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuItem from "./menuItem";
import { Product } from "../types/globalTypes";

interface ItemsGridProps {
  items: Product[];
  selectedCategory: number;
  searchQuery: string;
  onItemClick: (item: Product) => void;
}

const ItemsGrid: React.FC<ItemsGridProps> = ({
  items,
  selectedCategory,
  searchQuery,
  onItemClick,
}) => {
  const filteredItems = items.filter(
    (item) =>
      // Match selected category OR if search is active, ignore category
      (selectedCategory === 0 || item.category_id === selectedCategory) &&
      // Match product name or barcode in search query
      (searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.barcode.includes(searchQuery))
  );

  return (
    <Box
      sx={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)", padding: 2 }}
    >
      {searchQuery ? (
        <List>
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #E0E0E0",
                padding: "8px 16px",
                flexDirection: "row-reverse",
                textAlign: "right",
              }}
            >
              <ListItemIcon>
                <IconButton
                  onClick={() => onItemClick(item)}
                  color="success"
                  sx={{ width: 42, height: 42 }}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                sx={{ fontSize: "1.2rem" }}
                primary={item.name}
                secondary={`₪${item.price.toFixed(2)}`}
              />
              <Box
                component="img"
                src={item.image_url}
                alt={item.name}
                sx={{ width: 50, height: 50, borderRadius: 1 }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {filteredItems.map((item) => (
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
      )}
    </Box>
  );
};

export default ItemsGrid;
