import { useState, useEffect } from "react";
import { getFacultades } from "../api/facultades.api";

const useFacultades = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getFacultades();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useFacultades;
