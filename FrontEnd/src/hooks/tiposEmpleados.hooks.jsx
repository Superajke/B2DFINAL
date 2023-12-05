import { useState, useEffect } from "react";
import { getTiposEmpleado } from "../api/tiposEmpleado.api";

const useTiposEmpleado = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getTiposEmpleado();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useTiposEmpleado;
