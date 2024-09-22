import React, { useState } from "react";

export default function AddNewServices(props) {
  console.log(props, "sdsdg");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });
  const handelOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "sfs");
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        props.handelAddNew(form);
      }}
    >
      <div className="form-inner-container">
        <div className="form-group">
          <label>Name of Service</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => handelOnChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            required
            onChange={(e) => handelOnChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Name of Price</label>
          <input
            type="number"
            name="price"
            required
            onChange={(e) => handelOnChange(e)}
          />
        </div>
      </div>
      <div className="button-container">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
