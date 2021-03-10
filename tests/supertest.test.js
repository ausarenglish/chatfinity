/* eslint-disable no-undef */
const request = require('supertest');

const server = 'http://localhost:3000';

describe('/', () => {
  describe('GET', () => {
    it('responds with 200 status', () => {
      return request(server).get('/').expect(200)
    })
  })
})
