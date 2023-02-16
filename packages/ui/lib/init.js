import { RegisterBaseComponents } from "./partials/RegisterBaseItems";
import { UIInjectCSS } from "./utils/css";
let initialized = false;
export const InitUI = () => {
  if (initialized)
    return;
  RegisterBaseComponents();
  UIInjectCSS();
};
