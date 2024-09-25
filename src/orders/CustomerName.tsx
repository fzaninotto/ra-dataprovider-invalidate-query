import { useRecordContext, useGetManyAggregate } from "react-admin";
import { Order, Customer } from "data-generator-retail";

export const CustomerName = (_props: { label?: string }) => {
  const record = useRecordContext<Order>();
  const { data, isPending, error } = useGetManyAggregate<Customer>(
    "customers",
    { ids: record?.customer_id ? [record?.customer_id] : [] },
    { enabled: !!record }
  );
  if (isPending || error) return null;
  return (
    <>
      {data[0].first_name} {data[0].last_name}
    </>
  );
};
