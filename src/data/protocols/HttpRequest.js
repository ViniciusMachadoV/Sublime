import { HttpMethods } from "../../domain/models/HttpMethods";

export class HttpRequest {
  constructor(url) {
    this.url = url;
  }

  async get(endpoint, params) {
    return this.#_makeRequest(endpoint, HttpMethods.GET, null, params);
  }

  async post(endpoint, body) {
    return this.#_makeRequest(endpoint, HttpMethods.POST, body);
  }

  async put(endpoint, body) {
    return this.#_makeRequest(endpoint, HttpMethods.PUT, body);
  }

  async delete(endpoint, params) {
    return this.#_makeRequest(endpoint, HttpMethods.DELETE, null, params);
  }

  async #_makeRequest(endpoint, method, body = null, queryParams = null) {
    try {
      const queryParamsString =
        queryParams !== null ? `?${new URLSearchParams(queryParams)}` : "";

      const fetchOptions = {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method,
      };

      if (body !== null) {
        Object.assign(fetchOptions, { body });
      }

      const fetchResult = await fetch(
        `${this.url}${endpoint}${queryParamsString}`,
        fetchOptions
      );

      if (!fetchResult.ok)
        throw new Error(`${fetchResult.status} - ${fetchResult.statusText}`);

      return await fetchResult.json();
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}
