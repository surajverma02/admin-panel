import { useContext } from "react";
import { DataContext } from "../context/UserContext";

function About() {
  const userDetail = useContext(DataContext);
  console.log(userDetail);

  for (let i = 0; i < userDetail.marks.length; i++) {
    console.log(userDetail.marks[i]);
  }

  return (
    <>
      <h1>{userDetail.name}</h1>
      <h1>{userDetail.age}</h1>
      {userDetail.marks.map((mark, idx) => {
        return <h1 key={idx}>{idx+1}. {idx}--{mark}</h1>;
      })}
    </>
  );
}
export default About;
