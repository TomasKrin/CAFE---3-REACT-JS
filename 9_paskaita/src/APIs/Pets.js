import { useEffect, useState } from "react";
import { PetsAPI } from "../../Conts/conts";

const Pets = () => {
  const [pets, setPets] = useState(undefined);
  useEffect(() => {
    fetch(PetsAPI)
      .then((resp) => resp.json())
      .then((response) => {
        setPets(response);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("state", pets);
  return pets;
};

export default Pets;
