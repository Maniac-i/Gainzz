import axios from 'axios';


const apiCalls = {

  findAllByUserId: function(id) {
    return axios.get("/api/exercise/user/" + id)
  },
};

export default apiCalls;