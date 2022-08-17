import React from "react";
const className = "btn no-animation ";
const classNameNext = "btn no-animation btn-wide rounded-3xl";
const Button = React.forwardRef(({ onClick, href, title, type }, ref) => {
  return (
    <button className={type === "next" ? classNameNext : className} href={href} onClick={onClick} ref={ref}>
      {title}
    </button>
  );
});
Button.displayName = "Button";

export default Button;
