import { useState, useEffect } from "react";
import { getSedes } from "../api/sedes.api";

const useSedes = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getSedes();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useSedes;