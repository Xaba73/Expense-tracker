import ExpensiveItem from "./components/ExpenseItem.js";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Йогурт Teos 250г",
      amount: 76.99,
      date: new Date(2022, 9, 19),
    },
    {
      id: "e2",
      title: "Куриное филе 1 кг",
      amount: 259,
      date: new Date(2022, 9, 18),
    },
    {
      id: "e3",
      title: "Видеокарта Geforce 3070",
      amount: 120000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Кефир пискаревский 1%",
      amount: 60,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensiveItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpensiveItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpensiveItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpensiveItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
