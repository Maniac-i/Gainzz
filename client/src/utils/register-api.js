import axios from "axios";

class API {

    axios;

    constructor() {

        this.axios = axios.create();

    }

    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader( name, value ) {

        if( value )

            this.axios.defaults.headers.common[name] = value;

        else

            delete this.axios.defaults.headers.common[name];

    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * @param {STring} userData.username
     * 
     * @returns {Promise}
     */
    register( userData ) {
      alert(userData)
        return this.axios.post("/api/user", userData);

    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * @param {STring} userData.username
     * 
     * @returns {Promise}
     */
    login( userData ) {

        return this.axios.post("/api/login", userData);

    }

    authenticated() {

        return this.axios.post("/api/authenticated");

    }

}

export default new API();