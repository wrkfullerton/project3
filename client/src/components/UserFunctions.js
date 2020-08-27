import axios from 'axios';

export const register = newUser => {
  return axios
    .post('/api/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      profile: newUser.profile,
      grade: newUser.grade,
      subject: newUser.subject
    })
    .then(response => {
      console.log('Registered');
    })
}

export const login = user => {
  return axios
    .post('/api/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    });
}

export const profileForm = newRequest => {
  return axios
    .post('/api/profiles/data', {
      email: newRequest.email,
      tutor: newRequest.tutor,
      student: newRequest.student,
      grade: newRequest.grade,
      level: newRequest.level,
      price: newRequest.price,
      subject: newRequest.subject
    })
    .then(response => {
      console.log('hit the backend for pvWatts')
    })
    .catch(err => {
      console.log(err)
    })
}

