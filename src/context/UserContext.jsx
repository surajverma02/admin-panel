import { createContext } from "react";

export const DataContext = createContext();

function UserContext({ children }) {
  const details = {
    name: "Suraj",
    age: 20,
    marks: [20, 10, 15, 25],
    more: {
        nick:"top",
        color:"sky"
    }
  }

  return (
    <>
      <DataContext.Provider value={details}>{children}</DataContext.Provider>
    </>
  );
}

export default UserContext;
