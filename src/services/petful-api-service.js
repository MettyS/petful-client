import config from '../config'
const { API_ENDPOINT } = config;

const PetfulApiService = {
  async getPeople() {
    return fetch(`${API_ENDPOINT}/people`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },
  async postPerson(person) {
    return fetch(`${API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ person }),
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },
  async removePerson() {
    return fetch(`${API_ENDPOINT}/people`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },

  async getPets() {
    console.log(API_ENDPOINT)
    return fetch(`${API_ENDPOINT}/pets`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },
  async getCat() {
    return fetch(`${API_ENDPOINT}/pets/cat`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },
  async getDog() {
    return fetch(`${API_ENDPOINT}/pets/dog`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },
  async deleteDog() {
    return fetch(`${API_ENDPOINT}/pets/dog`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },
  async deleteCat() {
    return fetch(`${API_ENDPOINT}/pets/cat`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  }

}

export default PetfulApiService;