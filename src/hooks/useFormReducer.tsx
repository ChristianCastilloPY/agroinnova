import React, { useReducer, Reducer } from "react";

interface Action<E> {
  type: "set_value_str" | "set_value_number";
  name: keyof E;
  value: string;
}

type FormReducer<E> = Reducer<E, Action<E>>;

export default function useFormReducer<E>(initialState: E): {
  formState: E;
  dispatch: React.Dispatch<Action<E>>;
} {
  const reducer: FormReducer<E> = (state: E, action: Action<E>) => {
    console.log(action.value);
    switch (action.type) {
      case "set_value_str":
        return { ...state, [action.name]: action.value };
      case "set_value_number":
        return { ...state, [action.name]: parseFloat(action.value) };
      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(reducer, initialState);

  return { formState, dispatch };
}
