import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000' || '',
})

export const createLocation  = payload => api.post('/locations', payload);
export const getLocations    = () => api.get('/locations');
export const updateLocation  = (id, payload) => api.put(`/locations/${id}/edit`, payload);
export const getLocationById = (id) => api.get(`/locations/${id}`);
export const deleteLocation  = (id) => api.delete(`/locations/${id}`);

const apis = {
    createLocation,
    getLocations,
    updateLocation,
    getLocationById,
    deleteLocation,
}

export default apis;