import { ShowGuesser } from "react-admin";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { OrderList } from "./OrderList";

export default {
  list: OrderList,
  show: ShowGuesser,
  icon: ShoppingCartIcon,
  recordRepresentation: "reference",
};
