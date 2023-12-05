import { useState, useEffect } from "react";
import { getAreas } from "../api/areas.api";

const useAreas = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      let itm = await getAreas();
      setItems(itm.data);
    };
    getItem();
  }, []);

  return items;
};

export default useAreas;
