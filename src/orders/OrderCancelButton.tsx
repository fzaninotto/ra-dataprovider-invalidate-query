import { useDataProvider, useNotify } from "react-admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IconButton, Tooltip } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import type { Order } from "data-generator-retail";

export const OrderCancelButton = ({ order }: Props) => {
  const notify = useNotify();
  const queryClient = useQueryClient();

  const dataProvider = useDataProvider();

  const mutation = useMutation({
    mutationFn: (order: Order) =>
      dataProvider.update("orders", {
        id: order.id,
        data: { status: "cancelled" },
        previousData: order,
      }),
    onSuccess: ({ data: order }) => {
      notify(`Order ${order.reference} cancelled`);
      // refresh the list
      queryClient.invalidateQueries({
        queryKey: ["orders", "getList"],
      });
    },
  });

  const handleCancel = (order: Order) => {
    mutation.mutate(order);
  };

  return (
    <Tooltip title="Cancel order" placement="left">
      <IconButton
        color="error"
        aria-label="Cancel order"
        onClick={() => handleCancel(order)}
        disabled={mutation.isPending}
      >
        <CancelIcon />
      </IconButton>
    </Tooltip>
  );
};

interface Props {
  order: Order;
}
