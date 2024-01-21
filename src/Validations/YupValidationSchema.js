import * as yup from "yup";

const YupValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a Required field")
    .min(3, "Name must be at least 3 characters"),

  age: yup
    .number()
    .required("Age is a Required field")
    .integer("Age must be an integer")
    .positive("Age Can't be negative"),

  sex: yup
    .string()
    .required("Sex is a Required field")
    .oneOf(["m", "f", "o"], "Sex must be either Male, Female or Other"),

  mobile: yup
    .string()
    .matches(/^[6789]\d{9}$/, "Mobile number must be a valid Indian number"),

  idType: yup
    .string()
    .oneOf(["Aadhar", "PAN"], "ID Type must be either Aadhar or PAN"),

  govtId: yup.string().when("idType", {
    is: "Aadhar",
    then: (govtIdSchema) =>
      govtIdSchema.matches(
        /^[2-9]{1}[0-9]{11}$/,
        "Aadhar number must be a 12-digit number and should not start with 0 and 1"
      ),
    otherwise: (govtIdSchema) =>
      govtIdSchema.when("idType", {
        is: (idType) => idType === "PAN",
        then: (govtIdSchema) => {
          govtIdSchema.matches(
            /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
            "PAN number must be a 10-character long alpha-numeric string"
          );
        },
      }),
  }),
});

export default YupValidationSchema;
