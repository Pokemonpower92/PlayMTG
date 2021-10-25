import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000" || "",
});

// Location apis.
export const createReview = (id, payload) =>
    api.post(`locations/${id}/reviews`, payload);
export const getReviews = (id) => api.get(`/locations/${id}/reviews`);
export const updateReview = (lid, rid, payload) =>
    api.put(`/locations/${lid}/reviews/${rid}`, payload);
export const getReviewById = (lid, rid) =>
    api.get(`/locations/${lid}/reviews/${rid}`);
export const deleteReview = (lid, rid) =>
    api.delete(`/locations/${lid}/reviews/${rid}`);

const reviewAPI = {
    createReview,
    getReviews,
    updateReview,
    getReviewById,
    deleteReview,
};

export default reviewAPI;
