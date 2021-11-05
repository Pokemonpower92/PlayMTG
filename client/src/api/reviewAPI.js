import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000" || "",
});

// Review apis.
const createReview = (id, payload) =>
    api.post(`locations/${id}/reviews`, payload);
const getReviews = (id) => api.get(`/locations/${id}/reviews`);
const updateReview = (lid, rid, payload) =>
    api.put(`/locations/${lid}/reviews/${rid}`, payload);
const getReviewById = (lid, rid) =>
    api.get(`/locations/${lid}/reviews/${rid}`);
const deleteReview = (lid, rid) =>
    api.delete(`/locations/${lid}/reviews/${rid}`);

const reviewAPI = {
    createReview,
    getReviews,
    updateReview,
    getReviewById,
    deleteReview,
};

export default reviewAPI;
