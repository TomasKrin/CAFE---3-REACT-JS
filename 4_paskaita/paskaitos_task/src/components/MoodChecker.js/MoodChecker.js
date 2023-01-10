// import { useState } from "react";

// const MoodChecker = () => {
//   const [message, setMessage] = useState("Kaip jaučiates?");
//   return (
//     <div>
//       <h2>{message}</h2>
//       <button onClick={() => setMessage("Nieko tokio, viskas bus gerai :)")}>
//         Jaučiuosi prastai
//       </button>
//       <button onClick={() => setMessage("Nieko tokio, viskas yra gerai :)")}>
//         Jaučiuosi normaliai
//       </button>
//       <button onClick={() => setMessage("Jega valio")}>
//         Jaučiuosi puikiai
//       </button>
//     </div>
//   );
// };
// export default MoodChecker;

import { useState } from "react";
const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiates?");
  const buttons = [
    { label: "Jauciuosi prastai", value: "Nieko tokio, viskas bus gerai" },

    { label: "Jauciuosi gerai", value: "Nieko tokio, viskas yra gerai" },

    { label: "Jauciuosi puikiai", value: "viskas bus gerai" },

  ];
  return (
    <div>
      <h2>{message}</h2>
      {buttons.map((button) => (
        <button key={button.value} onClick={() => setMessage(button.value)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};
export default MoodChecker;