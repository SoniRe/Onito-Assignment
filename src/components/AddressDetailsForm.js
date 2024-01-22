import { Button, Stack, Box, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInputText from "./FormInputText";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, clearFields } from "../utils/usersSlice";
import { useState } from "react";
import FormAutoComplete from "./FormAutoComplete";
import useCountryName from "../hooks/useCountryName";

const AddressDetailsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);

  useCountryName(setCountries);

  const defaultFormValues = {
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset();
    dispatch(clearFields());
    alert("User Data Added to the Database");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            flexDirection: "column",
            gap: "1vw",
            px: "2vw",
            py: "4vw",
          }}
        >
          <Stack spacing={6} direction="row" alignItems="start">
            <InputLabel
              sx={{
                fontSize: "1.5vw",
                color: "black",
                width: "25vw",
              }}
            >
              Address
            </InputLabel>
            <FormInputText
              name="address"
              control={control}
              label="Enter Your Address"
            />
            <InputLabel
              sx={{
                fontSize: "1.5vw",
                color: "black",
                width: "16vw",
              }}
            >
              State
            </InputLabel>
            <FormInputText
              name="state"
              control={control}
              label="Enter Your State"
            />
            <InputLabel
              sx={{
                fontSize: "1.5vw",
                color: "black",
                width: "15vw",
              }}
            >
              City
            </InputLabel>
            <FormInputText
              name="city"
              control={control}
              label="Enter Your State"
            />{" "}
          </Stack>

          <Stack sx={{ mt: 4 }} spacing={6} direction="row" alignItems="start">
            <InputLabel
              sx={{ fontSize: "1.5vw", color: "black", width: "20vw" }}
            >
              Country
            </InputLabel>

            <FormAutoComplete
              name="country"
              control={control}
              label="Enter Country Name"
              options={countries}
            />

            <InputLabel
              sx={{ fontSize: "1.5vw", color: "black", width: "20vw" }}
            >
              Pincode
            </InputLabel>

            <FormInputText
              name="pincode"
              control={control}
              label="Enter Your Postal Code"
            />
          </Stack>
        </Box>

        <Stack direction="row" justifyContent={"center"} gap={"2vw"}>
          <Button
            color="secondary"
            variant="contained"
            size="medium"
            onClick={() => navigate("/")}
          >
            Go BACK
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="medium"
          >
            SUBMIT
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddressDetailsForm;
