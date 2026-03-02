import "./App.css";

// Task 5
function Greeting({ name }) {
  return <h2>Hello, {name}! This is a reusable component.</h2>;
}

// Task 6
function ProfileCard({ name, profession, image, isActive }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{profession}</p>
      <span className={isActive ? "active" : "inactive"}>
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
}

function App() {
  const name = "Alex";
  const year = 2026;
  const age = 20;

  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <>
        {/* Task1 */}
      <div className="container">
        <h1>Welcome to JSX Lab</h1>
        <p>JSX practice project.</p>

        {/* Task3 */}
        <h2>Hello, {name}!</h2>
        <p>Current year: {year}</p>
        <p>5 + 5 = {5 + 5}</p>
        <p>10 &gt; 5 = {10 > 5 ? "true" : "false"}</p>

        {/* Conditional Rendering */}
        <p>{age >= 18 ? "Adult" : "Minor"}</p>
        {age >= 18 && <p>You have full access.</p>}

        {/* Task4 */}
        <h3>Fruits List:</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>

        {/* Task 5*/}
        <Greeting name="Aikumis" />

        {/* Task 6 */}
        <ProfileCard
          name="Alex Johnson"
          profession="professional American climber"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFeLJIuNhxIhAwjoWZtIs3_WCdw63AKxVkRj1Gy9E1Reis2eg"
          isActive={false}
        />
      </div>
    </>
  );
}

export default App;