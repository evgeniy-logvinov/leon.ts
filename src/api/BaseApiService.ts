import axios, { AxiosInstance } from "axios";

const { VUE_APP_BASE_URI: apiUrl } = process.env;

export class BaseApiService {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: `${apiUrl || "https://api.kanye.rest"}`,
    });
  }
}
