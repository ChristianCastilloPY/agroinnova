/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Items {
  type: string;
  rol?: string[];
  item?: {
    name: string;
    path: string;
    icon: JSX.Element;
  };
}

interface ItemProps {
  items: Items[];
  open: boolean;
}

export default function ItemsSidebar({ items, open }: ItemProps) {
  return (
    <List>
      {items.map((item, i) =>
        item.type === "item" && item.item !== undefined ? (
          <ListItem key={i} disablePadding sx={{ display: "block" }}>
            <Link to={item.item.path}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ?? false ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ?? false ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.item?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.item?.name}
                  sx={{
                    opacity: open ?? false ? 1 : 0,
                    textDecoration: "none",
                    color: "#202124",
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          <Divider key={i} />
        )
      )}
    </List>
  );
}
