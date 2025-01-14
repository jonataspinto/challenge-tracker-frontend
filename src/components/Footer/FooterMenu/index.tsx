import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import FooterSubMenu from "./FooterSubMenu";
import LinksStoreApp from "../LinksStoreApp";

type FooterMenuItems = {
  items: {
    id: string;
    name: string;
    links: {
      id: string;
      href: string;
      name: string;
    }[];
  }[];
};

export function FooterMenu({ items }: FooterMenuItems) {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          lg: "row",
        },
      }}
    >
      <List
        sx={{
          display: {
            xs: "grid",
          },
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 2,
          paddingLeft: {
            xs: 3,
            sm: 12,
            lg: 0,
          },
          paddingRight: {
            xs: 3,
            sm: 12,
            lg: 0,
          },
          paddingBottom: {
            xs: 6,
            lg: 8,
          },
          width: "100%",
        }}
      >
        {items.map((menuItem) => (
          <ListItem
            key={menuItem.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 0,
            }}
          >
            <Typography variant="body2" component="h4">
              {menuItem.name}
            </Typography>
            <FooterSubMenu links={menuItem.links} />
          </ListItem>
        ))}
      </List>
      <LinksStoreApp />
    </Box>
  );
}
