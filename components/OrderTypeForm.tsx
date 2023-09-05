import React, { useState } from "react";
import { SyntheticEvent } from "react";

const OrderTypeForm = () => {
  const [weeks, setWeeks] = useState(1);

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    //@ts-ignore
    setWeeks(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="px-3 py-2">
          <input
            type="radio"
            name="purchase-type"
            id="option-1"
            className="mr-2 "
          />
          <label>One time Purchase</label>
        </div>
        <div className="border px-3 py-2 mt-2">
          <input
            type="radio"
            name="purchase-type"
            id="option-2"
            className="mr-2"
          />
          <label>Subscribe every</label>
          <select
            className="border px-2 py-1 ml-2 font-poppins"
            onChange={handleChange}
          >
            <option value={1} defaultValue={1}>
              1 Week
            </option>
            <option value={2}>2 Weeks</option>
            <option value={3}>3 Weeks</option>
            <option value={4}>4 Weeks</option>
          </select>
          <p className="text-left text-grey">
            Subscribe now and get 10% off on every reccuring Order!
          </p>
        </div>
      </form>
    </div>
  );
};

export default OrderTypeForm;
