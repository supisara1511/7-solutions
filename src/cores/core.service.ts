import axios, { AxiosInstance, AxiosResponse } from "axios";

class CoreService {
  private axiosInstance: AxiosInstance;
  private baseURL = "https://dummyjson.com";
  constructor() {
    this.axiosInstance = axios.create({ baseURL: this.baseURL });
  }

  public async get<T>(url: string): Promise<T> {
    const response: AxiosResponse = await this.axiosInstance.get(url);
    return response.data;
  }
}
export default CoreService;
