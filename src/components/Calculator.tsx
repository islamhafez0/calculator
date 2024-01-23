import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState<string>("");

  function handleButtonClick(value: string): void {
    if (value === "Del") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  }

  function handleClearInput(): void {
    setInput("");
  }

  function handleCalculation(): void {
    try {
      const hasSecondValue = /[+\-*/]\d/.test(input);
      if (hasSecondValue) {
        setInput(eval(input).toString());
      }
    } catch (error) {
      setInput("0");
    }
  }

  const buttons: string[] = [
    "C",
    "%",
    "Del",
    "/",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "00",
    ".",
    "=",
  ];

  return (
    <div className="claculator">
      <input type="text" value={input} readOnly />
      <div>
        {buttons.map((button) => (
          <button
            onClick={() => {
              if (button === "C") {
                handleClearInput();
              } else if (button === "=") {
                handleCalculation();
              } else {
                handleButtonClick(button);
              }
            }}
            key={button}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
