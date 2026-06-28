export type ConsultationState = {
  age: string | null;
  height: string;
  weight: string;
  smoking: string | null;
  drinking: string | null;
  exercise: string | null;
  history: string[];
  symptoms: string[];
  freeText: string;
};

export const initialState: ConsultationState = {
  age: null,
  height: "",
  weight: "",
  smoking: null,
  drinking: null,
  exercise: null,
  history: [],
  symptoms: [],
  freeText: "",
};

export type Action =
  | { type: "setSingle"; field: SingleField; value: string }
  | { type: "setText"; field: TextField; value: string }
  | { type: "toggleHistory"; value: string }
  | { type: "toggleSymptom"; value: string }
  | { type: "reset" };

type SingleField = "age" | "smoking" | "drinking" | "exercise";
type TextField = "height" | "weight" | "freeText";

export function reducer(
  state: ConsultationState,
  action: Action
): ConsultationState {
  switch (action.type) {
    case "setSingle":
      return { ...state, [action.field]: action.value };
    case "setText":
      return { ...state, [action.field]: action.value };
    case "toggleHistory":
      return { ...state, history: toggleHistoryValue(state.history, action.value) };
    case "toggleSymptom":
      return { ...state, symptoms: toggleValue(state.symptoms, action.value) };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

/** 「特になし」は他項目と排他にする */
function toggleHistoryValue(list: string[], value: string): string[] {
  if (value === "none") {
    return list.includes("none") ? [] : ["none"];
  }
  const without = list.filter((v) => v !== "none");
  return toggleValue(without, value);
}
