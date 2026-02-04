// Integration test

const request = require('supertest');
const { expect } = require('chai');
const { app } = require('../scripts/server');

describe('GET /hex-to-rgb (Integration test)', function () {

    it('returns correct RGB for valid hex without #', async function () {
        const res = await request(app)
            .get('/hex-to-rgb')
            .query({ hex: 'FF00AA'})
        
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({
            hex: '#FF00AA',
            rgb: {r: 255, g: 0, b: 170}
        });
    });

    it('returns correct RGB for valid hex with #', async function () {
        const res = await request(app)
            .get('/hex-to-rgb')
            .query({ hex: '#F0A'});
        
        expect(res.status).to.equal(200);
        expect(res.body.rgb).to.deep.equal({
            r: 255, g: 0, b: 170
        });
    });

    // -- Error tests --

    it('returns 400 for invalid hex', async function () {
        const res = await request(app)
            .get('/hex-to-rgb')
            .query({ hex: 'XYZ123'});
        
        expect(res.status).to.equal(400);
        expect(res.body.error).to.match(/Invalid/);
    });

    it('returns 400 for missing hex', async function () {
        const res = await request(app)
            .get('/hex-to-rgb')
        
        expect(res.status).to.equal(400);
        expect(res.body.error).to.match(/Invalid/);
    });
});