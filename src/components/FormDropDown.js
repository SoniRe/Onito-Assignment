import {
  FormHelperText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputDropdown = ({ name, control, label, options }) => {
  const variableWidth = name === "idType" ? "40%" : "100%";

  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"} sx={{ width: variableWidth }}>
      <InputLabel
        sx={{
          backgroundColor: "#F4F4F4",
        }}
      >
        {label}
      </InputLabel>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Select onChange={onChange} value={value}>
              {generateSingleOptions()}
            </Select>
            <FormHelperText sx={{ color: "red" }}>
              {error && error.message}
            </FormHelperText>
          </>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default FormInputDropdown;
