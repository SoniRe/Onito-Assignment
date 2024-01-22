import { Autocomplete, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeCountry } from "../utils/usersSlice";

const FormAutoComplete = ({ name, control, label, options }) => {
  const dispatch = useDispatch();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;

        return (
          <>
            <Autocomplete
              value={value ? value : null}
              onChange={(e, val) => onChange(val)}
              onInputChange={(e, newInputValue) =>
                dispatch(changeCountry(newInputValue))
              }
              options={options}
              label={label}
              sx={{ width: "100%" }}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  variant="outlined"
                  inputRef={ref}
                />
              )}
            />
            {error && (
              <Typography sx={{ color: "red" }} variant="h5">
                {error}
              </Typography>
            )}
          </>
        );
      }}
    />
  );
};

export default FormAutoComplete;
