import axios from 'axios';


const apiCalls = {

  findAllByUserId: function() {
    return axios.get("/api/exercise/")
  },
};

export default apiCalls;