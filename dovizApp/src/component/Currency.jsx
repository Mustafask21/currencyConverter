import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_O6AOgB81uM4XI4NVf7pFxSXUWfFnWMDqyCuaz33j";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromcurrency, setFromCurrency] = useState("USD");
  const [toCurenncy, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromcurrency}`
    );
    setResult((response.data.data[toCurenncy] * amount).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div className="title-box">
        <h3 className="title">DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          name=""
          id=""
          className="from-curenncy-option"
        >
          <option value="">USD</option>
          <option value="">EUR</option>
          <option value="">TL</option>
        </select>
        <FaArrowCircleRight
          style={{ fontSize: "25px", color: "aqua", marginInline: "15px" }}
        />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          name=""
          id=""
          className="to-from-curenncy-option"
        >
          <option value="">TL</option>
          <option value="">USD</option>
          <option value="">EUR</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />

        <div className="button-box">
          <button onClick={exchange} className="button-exchange">
            Çevir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
