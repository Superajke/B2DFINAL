import { useState, useEffect } from "react";
import { getDepartamentos } from "../api/departamentos.api";

const useDepartamentos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getDepartamentos();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useDepartamentos;
