import testFunc from "./functions/index.js";
import { setup as setupFunc } from "./functions/index.js";

export const options = {
  stages: [
    { duration: '1m', target: 20 }, // below normal load
    { duration: '2m', target: 20 },
    { duration: '1m', target: 40 }, // normal load
    { duration: '2m', target: 40 },
    { duration: '1m', target: 50 }, // around the breaking point
    { duration: '2m', target: 50 },
    { duration: '1m', target: 75 }, // beyond the breaking point
    { duration: '2m', target: 75 },
    { duration: '2m', target: 0 }, // scale down. Recovery stage.
  ],
};

export const setup = setupFunc;
export default testFunc;
