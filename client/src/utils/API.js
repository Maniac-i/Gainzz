import axios from 'axios';


const apiCalls = {

  //find ALL of the users exercises
  findAllByUserId: function(id) {
    return axios.get("/api/exercise/user/" + id)
  },

  //find ONE exercise detail
  findOne: function(id) {
    return axios.get('api/exercisedetails/' + id)
  },

  populateExerciseDetails: function(id) {
      return axios.get('api/exercise/populate/' + id)
  }
};

export default apiCalls;
