import Axios from 'axios';
export default class DatabaseHelper {
    constructor(){
        this.baseURL = "https://plyos-api.herokuapp.com";
    };

    async logIn (user) {
      let data = '';
      let error = {};
        try {
          const response = await Axios.post(`${this.baseURL}/user/login`, user);
          data = response.data;
        } catch (e) {
          error = e;     
        }
      return [data, error]
    };

    async signUp (newUser) {
      let data = "";
      let error = {};
        try {
          const response = await Axios.post(`${this.baseURL}/user/signup`, newUser);
          data = response;
        } catch (err) {
          error = err;     
        }
      return [data, error];
    };

    async privatePost (path, newData, token) {
      let data = "";
      let error = {};
      const header = {
        headers: {
          Authorization: "Bearer "+token
        }
      }
        try {
          const response = await Axios.post(this.baseURL+path, newData, header);
          data = response;
        } catch (err) {
          error = err;     
        }
      return [data, error];
    };

    async privateFetch (path, token) {
      let response = "";
      let error = {};
      const header = {
        headers: {
          Authorization: "Bearer "+token
        }
      }
        try {
          response = await Axios.get(this.baseURL+path, header);
        } catch (err) {
          error = err;     
        }
      return [response, error];
    };

    async fetch (path) {
      let response = "";
      let error = {};
      try {
        response = await Axios.get(this.baseURL+path);
      } catch (err) {
        error = err;
      }
      return [response, error];
    };

    async patch (path, newData) {
      let response = "";
      let error = {};
      try {
        response = await Axios.patch(this.baseURL+path, newData)
      } catch (err) {
        error = err;
      }
      return [response, error]
    }

    async privatePatch (path, token, newData) {
      let response = "";
      let error = {};
      const header = {
        headers: {
          Authorization: "Bearer "+token
        }
      }
      try {
        response = await Axios.patch(this.baseURL+path, newData, header)
      } catch (err) {
        error = err;
      }
      return [response, error]
    }

    async privateDelete (path, token) {
      let response = "";
      let error = {};
      const header = {
        headers: {
          Authorization: "Bearer "+token
        }
      }
      try {
        response = await Axios.delete(this.baseURL+path, header)
      } catch (err) {
        error = err;
      }
      return [response, error]
    }
}


