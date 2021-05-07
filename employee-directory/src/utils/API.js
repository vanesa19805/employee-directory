import axios from "axios";

// Export an object containing methods we'll use for accessing the random user/employee

export default {
  getRandomDog: function() {
    return axios.get("https://randomuser.me/api/?results=5&inc=name,gender,nat&noinfo");
  },

};