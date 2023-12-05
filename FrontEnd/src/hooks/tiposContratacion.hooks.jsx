import { useState, useEffect } from "react";
import { getTiposContratacion } from "../api/tiposContratacion.api";

const useTiposContr = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getTiposContratacion();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useTiposContr;
