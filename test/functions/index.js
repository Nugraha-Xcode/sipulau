import http from "k6/http";
import { check, sleep } from "k6";

const SIPULAU_URL = "http://sipulau.big.go.id";
const DIRECTUS_URL = "http://sipulau.big.go.id/panel";
const USERNAME = "username";
const PASSWORD = "password";

const POPUP_KEYS = [
  "fid",
  "id_toponim",
  "nammap",
  "alias",
  "wadmkk",
  "wadmpr",
  "foto1",
  "foto2",
  "foto3",
  "foto4",
  "jumlahKomentar",
];
const POPUP_DETAIL_KEYS = [
  "id_wilayah",
  "artinam",
  "sjhnam",
  "aslbhs",
  "wadmkd",
  "wadmkc",
  "remark",
];

const POINT_COMMENT = JSON.stringify({
  email: "test@test.com",
  isi: "Test",
  lon: 0,
  lat: 0,
});
const ISLAND_COMMENT = JSON.stringify({ email: "test@test.com", isi: "Test" });
const DOWNLOAD_FILTER = JSON.stringify({ id_toponim: 41789 });

export const setup = () => {
  // login
  const loginRes = http.post(
    `${DIRECTUS_URL}/inageoportal-login/`,
    JSON.stringify({
      username: USERNAME,
      password: PASSWORD,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
  check(loginRes, {
    "logged in successfully": (res) =>
      typeof res.json("accessToken") === "string",
  });
  return loginRes.json();
};

export default (data) => {
  const loginRes = data;
  // get island mvt
  check(http.get(`${SIPULAU_URL}/api/mvt/titik-pulau/4/13/8/`), {
    "retrieved island mvt": (res) =>
      res.status === 200 &&
      res.headers["Content-Type"] === "application/x-protobuf" &&
      res.body.length > 0,
  });

  // get island popup
  check(http.get(`${SIPULAU_URL}/api/titik-pulau/41789/popup/`).json(), {
    "retrieved island popup": (obj) => {
      const keys = Object.keys(obj);
      if (keys.length !== POPUP_KEYS.length) {
        return false;
      }
      for (const el of POPUP_KEYS) {
        if (!keys.includes(el)) {
          return false;
        }
      }
      return true;
    },
  });

  // get island popup detail
  check(http.get(`${SIPULAU_URL}/api/titik-pulau/41789/popup-detail/`).json(), {
    "retrieved island popup detail": (obj) => {
      const keys = Object.keys(obj);
      if (keys.length !== POPUP_DETAIL_KEYS.length) {
        return false;
      }
      for (const el of POPUP_DETAIL_KEYS) {
        if (!keys.includes(el)) {
          return false;
        }
      }
      return true;
    },
  });

  // get island comment
  check(http.get(`${SIPULAU_URL}/api/titik-pulau/41789/komentar/`).json(), {
    "retrieved island comments": (obj) => Array.isArray(obj),
  });

  // set auth header
  const authHeaders = {
    headers: {
      Authorization: `Bearer ${loginRes.accessToken}`,
    },
  };
  const authHeadersJson = {
    headers: {
      Authorization: `Bearer ${loginRes.accessToken}`,
      "Content-Type": "application/json",
    },
  };

  // post point comment
  check(
    http.post(
      `${SIPULAU_URL}/api/komentar-titik/`,
      POINT_COMMENT,
      authHeadersJson
    ),
    { "post point comment success": (res) => res.status === 201 }
  );

  // post island comment (Pulau Terkulai)
  check(
    http.post(
      `${SIPULAU_URL}/api/titik-pulau/41789/komentar/`,
      ISLAND_COMMENT,
      authHeadersJson
    ),
    { "post island comment success": (res) => res.status === 201 }
  );

  // get user comment
  check(http.get(`${SIPULAU_URL}/api/user/komentar/`, authHeaders).json(), {
    "retrieved comments": (obj) => Array.isArray(obj),
  });

  // download csv
  check(
    http.post(
      `${SIPULAU_URL}/api/titik-pulau/download/csv/`,
      DOWNLOAD_FILTER,
      authHeadersJson
    ),
    { "retrieved csv": (res) => res.headers["Content-Type"] === "text/csv" }
  );

  // download shp
  const downloadShpUrl = http
    .post(
      `${SIPULAU_URL}/api/titik-pulau/download/shp/`,
      JSON.stringify(DOWNLOAD_FILTER),
      authHeadersJson
    )
    .json("url");
  check(downloadShpUrl, {
    "retrieved download shp url": (obj) => typeof obj === "string",
  });
  if (downloadShpUrl) {
    check(http.get(downloadShpUrl, authHeaders), {
      "retrieved shp zip": (res) =>
        res.headers["Content-Type"] === "application/zip",
    });
  }

  sleep(5);
};
