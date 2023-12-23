import React from "react";
import "./common.css";
import ClassItem from "./ClassItem";

const ClassList = () => {
  return (
    <div className="cl">
      <ClassItem cls="I" pre={33} abs={11} clr="gray" />
      <ClassItem cls="II" pre={40} abs={8} clr="red" />
      <ClassItem cls="III" pre={60} abs={25} clr="burlywood" />
      <ClassItem cls="IV" pre={50} abs={8} clr="darkblue" />
      <ClassItem cls="V" pre={30} abs={2} clr="tomato" />
      <ClassItem cls="VI" pre={41} abs={3} clr="darkorange" />
      <ClassItem cls="VII" pre={68} abs={15} clr="gold" />
      <ClassItem cls="VIII" pre={70} abs={5} clr="blue" />
      <ClassItem cls="IX" pre={50} abs={2} clr="lightcoral" />
      <ClassItem cls="X" pre={68} abs={7} clr="green" />
    </div>
  );
};

export default ClassList;
