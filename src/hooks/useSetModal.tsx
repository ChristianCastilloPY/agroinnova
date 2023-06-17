import { useState } from "react";

export default function useSetModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const setModalUpdate = (value: boolean) => {
    setIsOpenModal(value);
  };
  return { isOpenModal, setModalUpdate };
}
