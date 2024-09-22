import React, { useEffect, useState } from "react";
import Service from "../component/Service";
import data from "../Constants/data";
import AddNewServices from "./AddNewServices";
export default function Home() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(data);
  }, []);

  const handelAddNew = (value) => {
    setServices((prev) => {
      return [value, ...prev];
    });
  };
  const handelDelete = (id) => {
    const updateDate = services.filter((e) => {
      return e.id !== id;
    });
    setServices(updateDate);
  };
  return (
    <div>
      <AddNewServices handelAddNew={handelAddNew} />
      {services.map((e) => {
        return (
          <Service
            id={e?.id}
            name={e?.name}
            description={e.description}
            price={e?.price}
            handelDelete={handelDelete}
          />
        );
      })}
    </div>
  );
}
