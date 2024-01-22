import { useEffect } from "react";
import { COUNTRY_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const useCountryName = (setCountries) => {
  const countryName = useSelector((store) => store.users.countryTyped);

  useEffect(() => {
    const i = setTimeout(() => getCountryData(), 200);

    return () => {
      clearTimeout(i);
    };
  }, [countryName]);

  const getCountryData = async () => {
    try {
      const data = await fetch(COUNTRY_URL + countryName);
      const json = await data.json();

      const finalOutput = json?.map((obj) => obj.name.common);
      setCountries(finalOutput);
    } catch (err) {
      console.error(err.message);
    }
  };
};

export default useCountryName;
