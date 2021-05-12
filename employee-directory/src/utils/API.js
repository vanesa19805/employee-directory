import axios from "axios";

// Export an object containing methods we'll use for accessing the random user/employee

export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=5");
  },

};