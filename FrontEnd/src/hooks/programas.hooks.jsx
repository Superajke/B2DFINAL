import { useState, useEffect } from "react";
import { getProgramas } from "../api/programas.api";

const useProgramas = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getProgramas();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useProgramas;
