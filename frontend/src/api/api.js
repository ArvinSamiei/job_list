import axios from 'axios';
import apiClient from './apiClient';

export const fetchJobs = async () => {
    try {
        const response = await apiClient.get(`/jobs`);
        return response.data; // Return the fetched data
    } catch (err) {
        throw new Error(err.message); // Throw an error if the request fails
    }
};

export const fetchJobById = async (job_id) => {
    try {
        const response = await apiClient.get(`/jobs/${job_id}`);
        return response.data; // Return the fetched data
    } catch (err) {
        throw new Error(err.message); // Throw an error if the request fails
    }
};

export const deleteJobById = async (jobId, token) => {
    try {
        const response = await apiClient.delete(`/jobs/${jobId}`, jobId,
            {
                headers: { Authorization: `Bearer ${token}` }
            });
        return response.data; // Return the fetched data
    } catch (err) {
        throw new Error(err.message); // Throw an error if the request fails
    }
};


export const createJob = async (jobData, token) => {
    const response = await apiClient.post(`/jobs`, jobData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
