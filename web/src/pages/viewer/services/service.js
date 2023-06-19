import axios from "axios";
let service = axios.create({
  // timeout: 5000,
  baseURL: "http://127.0.0.1:8081"
});
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res);
    // return Promise.resolve(res);
    if (res.code == 0) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

class Service {
  Get(url, data = {}) {
    return service({
      url: url,
      method: "get",
      params: data
    });
  }

  Post(url, data = {}) {
    return service({
      url: url,
      method: "post",
      data: data
    });
  }

  Put(url, data = {}) {
    return service({
      url: url,
      method: "put",
      data: data
    });
  }

  Delete(url, data = {}) {
    return service({
      url: url,
      method: "delete",
      data: data
    });
  }
}

export default new Service();
