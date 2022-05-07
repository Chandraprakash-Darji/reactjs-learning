import { useEffect, useRef } from "react";

const DomRef = () => {
  // Specify the type of Dom Element
  const inputRef = useRef<HTMLInputElement>(null);
  // ! after null shows that inputref is not going to be null
  // const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // ? -> to Check Existence
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default DomRef;
