import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import { Stack } from "@mui/material";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm sx={{ maxWidth: 500 }}>
      <TextInput source="reference" />
      <Stack direction="row" gap={1}>
        <NumberInput source="price" />
        <NumberInput source="width" />
        <NumberInput source="height" />
      </Stack>
      <TextInput source="thumbnail" />
      <TextInput source="description" multiline />
    </SimpleForm>
  </Edit>
);
