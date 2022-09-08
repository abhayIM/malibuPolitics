import React, { useEffect, useState } from "react";

const MultipleDropDown = () => {
  const [countryData, setCountryData] = useState([]);
  const [singleCountry, setSingleCountry] = useState(null);
  const [cityData, setCityData] = useState([]);
  const [cities, setCities] = useState("");
  const countryCities = "https://countriesnow.space/api/v0.1/countries";
  const countryPop =
    "https://countriesnow.space/api/v0.1/countries/population/cities";
  const getCountries = async () => {
    const res = await fetch(countryCities);
    const resJson = await res.json();
    setCountryData(resJson.data);
  };

  const handleSingleCountry = (e) => {
    setSingleCountry(e.target.value);

    setCityData(
      countryData &&
        countryData.filter((country, ind) => country.country === e.target.value)
    );
    setCities(null);
  };

  useEffect(() => {
    getCountries();
  }, []);
  console.log({ singleCountry, cityData });
  console.log("iid", countryData);

  return (
    <div>
      <div className="multiple-dd-wrapper">
        <select onChange={(e) => handleSingleCountry(e)}>
          <option defaultValue={""}>Select Countries</option>
          {countryData &&
            countryData?.map((country, ind) => {
              return (
                <option key={ind} value={country?.country}>
                  {" "}
                  {country?.country}{" "}
                </option>
              );
            })}
        </select>

        <select
          onChange={(e) => {
            setCities(e.target.value);
          }}
        >
          <option defaultValue={cities}>Select Cities</option>
          {cityData &&
            cityData?.map((city, ind) => {
              return city.cities.map((singleCity, cityInd) => {
                return (
                  <option key={cityInd} value={singleCity}>
                    {singleCity}
                  </option>
                );
              });
            })}
        </select>

        <h5> selected Country is {singleCountry && singleCountry}</h5>
        <h5> selected city is {cities && cities}</h5>
      </div>
    </div>
  );
};

export default MultipleDropDown;
