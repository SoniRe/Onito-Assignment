import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const FormInputText = ({ name, control, label }) => {
  const variableWidth = name === "age" ? "140%" : "100%";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          size="small"
          sx={{ width: variableWidth }}
          label={label}
          value={value ? value : ""}
          type="text"
          onChange={onChange}
        />
      )}
    />
  );
};

export default FormInputText;
