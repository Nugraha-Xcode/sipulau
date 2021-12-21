import testFunc from "./functions/index.js";
import { setup as setupFunc } from "./functions/index.js";

export const options = {
  stages: [
    { duration: "1m", target: 10 }, // simulate ramp-up of traffic from 1 to 30 users over 5 minutes.
    // { duration: "4m", target: 10 }, // stay at 30 users for 10 minutes
    { duration: "2m", target: 30 }, // ramp-up to 50 users over 3 minutes (peak hour starts)
    { duration: "1m", target: 30 }, // stay at 50 users for short amount of time (peak hour)
    { duration: "2m", target: 10 }, // ramp-down to 30 users over 3 minutes (peak hour ends)
    // { duration: "4m", target: 10 }, // continue at 30 for additional 10 minutes
    { duration: "1m", target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ["p(99)<2000"], // 99% of requests must complete below 2s
  },
};

export const setup = setupFunc;
export default testFunc;
