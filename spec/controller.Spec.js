import Requests from 'supertest';
import app from '../index';

const api = new Requests(app);

describe('GET /', () => {
  it('should serve welcome route', (done) => {
    api.get('/')
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text).message).toEqual('Welcome to Population Management API');
        done();
      });
  });
});

describe('POST /location', () => {
  it('should return error message with wrong location details', (done) => {
    api.post('/location')
      .send({
        name: '',
        male: '',
        female: '',
        parentLocation: '',
      })
      .end((err, res) => {
        expect(res.status).toEqual(400);
        expect(JSON.parse(res.text).message).toEqual('Invalid name, Location name must be greated than 1 character and must be letters');
        done();
      });
  });

  it('should return error message with wrong location details', (done) => {
    api.post('/location')
      .send({
        name: 'Lagos',
        male: '',
        female: '',
        parentLocation: '',
      })
      .end((err, res) => {
        expect(res.status).toEqual(400);
        expect(JSON.parse(res.text).message).toEqual('Invalid male count, Male count must be a number greater or equal to zero');
        done();
      });
  });

  it('should return error message with wrong location details', (done) => {
    api.post('/location')
      .send({
        name: 'Lagos',
        male: '123',
        female: '',
        parentLocation: '',
      })
      .end((err, res) => {
        expect(res.status).toEqual(400);
        expect(JSON.parse(res.text).message).toEqual('Invalid female count, Female count must be a number greater or equal to zero');
        done();
      });
  });

  it('should add a location with correct data', (done) => {
    api.post('/location')
      .send({
        name: 'Lagos',
        male: '123',
        female: '123',
        parentLocation: '',
      })
      .end((err, res) => {
        expect(res.status).toEqual(201);
        expect(JSON.parse(res.text).message).toEqual('Location created');
        expect(JSON.parse(res.text).data.name).toEqual('Lagos');
        expect(JSON.parse(res.text).data.male).toEqual(123);
        expect(JSON.parse(res.text).data.female).toEqual(123);
        api.post('/location')
          .send({
            name: 'Lagos',
            male: '123',
            female: '123',
            parentLocation: '',
          })
          .end((err, res) => {
            expect(res.status).toEqual(409);
            expect(JSON.parse(res.text).message).toEqual('Location Name must be Unique');
            done();
          });
        done();
      });
  });
});


describe('GET /locations', () => {
  beforeEach((done) => {
    api.post('/location')
      .send({
        name: 'Yaba',
        male: '123',
        female: '132',
        parentLocation: '',
      })
      .end((err, res) => {
        done();
      });
  });

  it('should return all location', (done) => {
    api.get('/locations')
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text).message).toEqual('Locations loaded');
        expect(JSON.parse(res.text).data.length).toBeGreaterThan(0);
        done();
      });
  });
});

describe('GET /delete', () => {
  beforeEach((done) => {
    api.post('/location')
      .send({
        name: 'Yaba1',
        male: '123',
        female: '132',
        parentLocation: '',
      })
      .end((err, res) => {
        done();
      });
  });

  it('should delete the specified location', (done) => {
    api.delete('/location/Yaba1')
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text).message).toEqual('Location deleted');
        done();
      });
  });
});


describe('GET /delete', () => {
  beforeEach((done) => {
    api.post('/location')
      .send({
        name: 'Yaba2',
        male: '123',
        female: '132',
        parentLocation: '',
      })
      .end((err, res) => {
        done();
      });
  });

  it('should update the specified location', (done) => {
    api.put('/location/Yaba2')
      .send({
        name: 'Lagos2',
        male: '123',
        female: '122',
        parentLocation: '',
      })
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text).message).toEqual('Location Edited');
        done();
      });
  });
});
