import { atom } from "recoil";

export const selectedIdState = atom({
  key: "selectedIdState",
  default: { selected: null },
});

export const selectedNameState = atom({
  key: "selectednameState ",
  default: null,
});
