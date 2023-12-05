import { useState, useEffect } from "react";
import { getPaises } from "../api/paises.api";

const usePaises = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getPaises();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default usePaises;
