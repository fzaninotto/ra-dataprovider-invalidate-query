import { Title, useDataProvider, useGetList } from "react-admin";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import type { Order } from "data-generator-retail";

import { OrderCancelButton } from "./orders/OrderCancelButton";

export const Dashboard = () => {
  const dataProvider = useDataProvider();

  const { data, error, isPending, refetch } = useGetList<Order>("orders", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "date", order: "DESC" as const },
    filter: { status: "ordered" },
  });

  if (isPending || error) return null;

  return (
    <Card sx={{ mt: 2, width: 400 }}>
      <Title title="Dashboard" />
      <CardContent>
        <Typography variant="h6">Latest Orders</Typography>
        <List dense>
          {data.map((order) => (
            <ListItem
              key={order.id}
              disableGutters
              sx={listItemStyle}
              secondaryAction={
                <OrderCancelButton order={order} refetch={refetch} />
              }
            >
              <ListItemText
                primary={`Ref. ${order.reference}`}
                secondary={orderDescription(order)}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const listItemStyle = {
  "& .MuiListItemSecondaryAction-root": { display: "none" },
  "&:hover .MuiListItemSecondaryAction-root": {
    display: "block",
  },
};

const orderDescription = (order: Order) =>
  `${new Date(order.date).toLocaleDateString("en-GB")}, ${
    order.basket.length
  } items, ${new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(order.total)}`;
