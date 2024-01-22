import { Button, Stack, Box, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInputText from "./FormInputText";
import FormInputDropdown from "./FormDropDown";
import YupValidationSchema from "../Validations/YupValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { fillForm1 } from "../utils/usersSlice";
import { useDispatch } from "react-redux";
import { options1 } from "./../utils/constants";
import { options2 } from "./../utils/constants";

const PersonDetailsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultFormValues = {
    name: "",
    mobile: "",
    age: null,
    sex: "",
    idType: "",
    govtId: "",
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultFormValues,
    resolver: yupResolver(YupValidationSchema),
  });

  const onSubmit = (data) => {
    dispatch(fillForm1(data));
    reset();
    navigate("/form2");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "2vw",
            px: "2vw",
            py: "4vw",
          }}
        >
          <Box flex={1}>
            <Stack spacing={8} direction="row" alignItems="start">
              <InputLabel
                sx={{
                  fontSize: "1.5vw",
                  color: "black",
                  width: "6vw",
                }}
              >
                Name
              </InputLabel>

              <FormInputText name="name" control={control} label="Enter Name" />
            </Stack>
            <Stack
              sx={{ mt: 4 }}
              spacing={8}
              direction="row"
              alignItems="start"
            >
              <InputLabel
                sx={{ fontSize: "1.5vw", width: "6vw", color: "black" }}
              >
                Mobile
              </InputLabel>
              <FormInputText
                name="mobile"
                control={control}
                label="Enter Mobile"
              />
            </Stack>
          </Box>

          <Box flex={1.5}>
            <Stack spacing={8} direction="row" alignItems="start">
              <InputLabel
                sx={{
                  fontSize: "1.5vw",
                  color: "black",
                  width: "10vw",
                }}
              >
                Age
              </InputLabel>

              <FormInputText
                name="age"
                control={control}
                label="Enter Your Age"
              />

              <InputLabel
                sx={{
                  fontSize: "1.5vw",
                  color: "black",
                  width: "10vw",
                }}
              >
                Sex
              </InputLabel>

              <FormInputDropdown
                name="sex"
                control={control}
                label="Enter Sex"
                options={options1}
              />
            </Stack>

            <Stack
              sx={{ mt: 4 }}
              spacing={4}
              direction="row"
              alignItems="start"
            >
              <InputLabel
                sx={{ fontSize: "1.5vw", color: "black", width: "20vw" }}
              >
                Govt Issued ID
              </InputLabel>

              <FormInputDropdown
                name="idType"
                control={control}
                label="ID Type"
                options={options2}
              />

              <FormInputText
                name="govtId"
                control={control}
                label="Enter Govt ID"
              />
            </Stack>
          </Box>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="medium"
        >
          NEXT
        </Button>
      </form>
    </Box>
  );
};

export default PersonDetailsForm;
