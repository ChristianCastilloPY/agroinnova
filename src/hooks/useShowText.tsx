import { useState } from "react";

export default function useShowText() {
  const [showText, setShowText] = useState(false);

  const onSetShowText = () => {
    setShowText(!showText);
  };

  return { showText, onSetShowText };
}
