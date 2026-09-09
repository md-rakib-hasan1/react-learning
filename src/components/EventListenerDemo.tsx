import { useEffect } from "react";

const EventListenerDemo = () => {
  useEffect(() => {
    const button = document.getElementById("myButton");

    const handleClick = () => {
      console.log("Button clicked!");
    };

    button?.addEventListener("click", handleClick);

    return () => {
      button?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <h2>Event Listener Demo</h2>

      <button id="myButton">
        Click Me
      </button>
    </div>
  );
};

export default EventListenerDemo;