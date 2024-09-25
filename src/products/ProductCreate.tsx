import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import { Stack } from "@mui/material";

export const ProductCreate = () => (
  <Create redirect="list">
    <SimpleForm sx={{ maxWidth: 500 }}>
      <TextInput source="reference" required />
      <Stack direction="row" gap={1}>
        <NumberInput source="price" />
        <NumberInput source="width" />
        <NumberInput source="height" />
      </Stack>
      <TextInput source="thumbnail" />
      <TextInput source="description" multiline />
    </SimpleForm>
  </Create>
);
