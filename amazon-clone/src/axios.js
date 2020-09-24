import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-160ca.cloudfunctions.net/api'
})

export default instance;