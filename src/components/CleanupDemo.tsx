import { useEffect, useState } from "react";

const CleanupDemo = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped");
    };
  }, []);

  return (
    <div>
      <h2>Cleanup Demo</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default CleanupDemo;