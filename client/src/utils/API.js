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

  //populates all the details for one exercise
  populateExerciseDetails: function(id) {
      return axios.get('api/exercise/populate/' + id)
  },

  //youtube API call for Broscience
  broscience: function() {
    return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=broscience&type=video&key=AIzaSyBeyYj9AHzrKsUh5vpUIithCK4hMWXDs2M')
  },

  //adds a new exercise
  addExercise: function(data) {
    console.log("HERE!")
    return axios.post('/api/exercise', data)
  },

  addDetail: function(data) {
    return axios.post('/api/exercisedetails', data)
  }
};

export default apiCalls;
