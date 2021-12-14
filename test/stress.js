import testFunc from "./functions/index.js";

export const options = {
  stages: [
    { duration: '2m', target: 25 }, // below normal load
    { duration: '5m', target: 25 },
    { duration: '2m', target: 50 }, // normal load
    { duration: '5m', target: 50 },
    { duration: '2m', target: 75 }, // around the breaking point
    { duration: '5m', target: 75 },
    { duration: '2m', target: 100 }, // beyond the breaking point
    { duration: '5m', target: 100 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.

  ],
};

export default testFunc;
