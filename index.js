// Here we're only adding the basic routing, you can add more features later.
const { BrowserRouter, Route, Routes } = ReactRouterDOM;

function Dashboard() {
  return <h2>Welcome to the Dashboard</h2>;
}

function ToDoPage() {
  return <h2>To Do List</h2>;
}

function InProgressPage() {
  return <h2>In Progress Tasks</h2>;
}

function DonePage() {
  return <h2>Completed Tasks</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/inprogress" element={<InProgressPage />} />
        <Route path="/done" element={<DonePage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
