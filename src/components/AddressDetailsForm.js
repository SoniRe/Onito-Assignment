import { Button, Stack, Box, InputLabel, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInputText from "./FormInputText";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/usersSlice";
import { useEffect, useState } from "react";

const AddressDetailsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);

  const defaultFormValues = {
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
  };

  const { handleSubmit, reset, control, watch } = useForm({
    defaultValues: defaultFormValues,
  });

  const countryValue = watch("country");

  useEffect(() => {
    const i = setTimeout(() => getCountryData(), 200);

    return () => {
      clearTimeout(i);
    };
  }, [countryValue]);

  const getCountryData = async () => {
    try {
      const data = await fetch(
        "https://restcountries.com/v3.1/name/" + countryValue
      );
      const json = await data.json();

      const finalOutput = json?.map((obj) => obj.name.common);
      setCountries(finalOutput);
      console.log(finalOutput);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addUser(data));
    reset();
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

            <FormInputText
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
