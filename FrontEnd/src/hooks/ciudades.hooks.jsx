import { useState, useEffect } from "react";
import { getCiudades } from "../api/ciudades.api";

const useCiudades = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getCiudades();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useCiudades;
