import http from "http";

export default class Request {
  constructor({ baseURL } = {}) {
    this.baseURL = baseURL || "";
  }

  get(path) {
    return new Promise((resolve, reject) => {
      http
        .get(`${this.baseURL}${path}`, (res) => {
          const buffer = [];
          res.on("data", (data) => buffer.push(data));
          res.on("end", () => {
            const result = Buffer.concat(buffer).toString();
            const response = {
              data: JSON.parse(result),
              statusCode: res.statusCode,
            };
            resolve(response);
          });
        })
        .on("error", (e) => {
          reject(e);
        });
    });
  }

  post(path, body) {
    const data = JSON.stringify(body);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };
    return new Promise((resolve, reject) => {
      const request = http.request(`${this.baseURL}${path}`, options, (res) => {
        const buffer = [];
        res.on("data", (data) => buffer.push(data));
        res.on("end", () => {
          const result = Buffer.concat(buffer).toString();
          const response = {
            data: JSON.parse(result),
            statusCode: res.statusCode,
          };
          resolve(response);
        });
      });

      request.on("error", (error) => {
        reject(error);
      });

      request.write(data);
      request.end();
    });
  }
}
