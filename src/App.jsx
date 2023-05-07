import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Button = ({ text, color = "blue" }) => {
    const btnCss = `bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`;
    return <button className={btnCss}>{text}</button>;
  };

  const ExampleRow = () => (
    <div className="grid gap-2">
      <input type="text" placeholder="Item" value="" />
      <input type="text" placeholder="Amount" value="" />
      <input type="text" placeholder="Purchaser" value="" />

      <select id="" name="">
        <option value="">-</option>
        <option value="">One</option>
        <option value="">Two</option>
        <option value="">Three</option>
      </select>

      <Button text="Example" color="red" />
    </div>
  );

  const ExpenseReport = () => {
    const expenses = [
      {
        itemName: "foo",
        itemDescription: null,
        amountCents: 1000,
        purchaserId: 1,
        createdAt: null,
        updatedAt: null,
      },
      {
        itemName: "bar",
        itemDescription: null,
        amountCents: 632,
        purchaserId: 1,
        createdAt: null,
        updatedAt: null,
      },
      {
        itemName: "baz",
        itemDescription: null,
        amountCents: 795,
        purchaserId: 2,
        createdAt: null,
        updatedAt: null,
      },
      {
        itemName: "quux",
        itemDescription: null,
        amountCents: 12345,
        purchaserId: 3,
        createdAt: null,
        updatedAt: null,
      },
    ];

    const purchasers = {
      1: { name: "Alice" },
      2: { name: "Bob" },
      3: { name: "Charlie" },
      4: { name: "Dan" },
    };

    const numFmt = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Purchaser</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((exp, i) => (
            <tr key={i}>
              <td>{exp.itemName}</td>
              <td>{numFmt.format(exp.amountCents / 100)}</td>
              <td>{purchasers[exp.purchaserId].name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div>
        <h2 className="text-5xl font-bold pb-8">Expenses</h2>

        <ExpenseReport />
      </div>

      <div className="pt-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>

      <div className="max-w-lg mx-auto">
        <ExampleRow />
      </div>
    </>
  );
}

export default App;
