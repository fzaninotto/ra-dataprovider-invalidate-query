import { ReactNode } from "react";
import { Admin, Resource, Layout } from "react-admin";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { dataProvider } from "./dataProvider";
import products from "./products";
import orders from "./orders";
import customers from "./customers";
import { Dashboard } from "./Dashboard";

const MyLayout = ({ children }: { children: ReactNode }) => (
  <Layout>
    {children}{" "}
    <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
  </Layout>
);

export const App = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout} dashboard={Dashboard}>
    <Resource name="orders" {...orders} />
    <Resource name="customers" {...customers} />
    <Resource name="products" {...products} />
  </Admin>
);
