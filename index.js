import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// Change the code below this line.
const Card = (props) => (
  <li>
    <img src={props.link} alt={props.alt} />
    <h3>{props.description}</h3>
  </li>
);
// Change the code above this line.

// Change the code below this line.
const App = () => (
  <div>
    <h1>Encyclopedia</h1>
    <ul>
      {/* Card 1 */}
      <Card
        link="https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/introduction-to-react/sun.png"
        alt="Provide an appropriate description."
        description="The sun shone brightly, casting a warm glow across the tranquil beach."
      />

      {/* Card 2 */}
      <Card
        link="https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/introduction-to-react/mountain.png"
        alt="Provide an appropriate description"
        description="The hiker gazed in awe at the majestic mountain towering before them"
      />
    </ul>
  </div>
);
// Change the code above this line.

root.render(<App />);
