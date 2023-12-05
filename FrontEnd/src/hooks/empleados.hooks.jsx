import { useState, useEffect } from "react";
import { getEmpleados } from "../api/empleados.api";

const useEmpleados = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getEmpleados();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useEmpleados;
