import { defineEndpoint } from "@directus/extensions-sdk";

export default defineEndpoint((router, { exceptions }) => {
  const { InvalidCredentialsException } = exceptions;
  router.get("/", (req, res, next) => {
    if (req.accountability.user) {
      return res.json({ user: req.accountability.user });
    } else {
      return next(new InvalidCredentialsException());
    }
  });
});
