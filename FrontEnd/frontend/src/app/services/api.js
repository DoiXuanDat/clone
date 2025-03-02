import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const generateAudio = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/generate-audio`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

export const combineAudioSegments = async (paths) => {
    try {
        const response = await axios.post(`${BASE_URL}/combine-audio`, { paths }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

export const generateSRT = async (audioPath) => {
    try {
        const response = await axios.post(`${BASE_URL}/generate-srt`, 
            { audioPath },
            { responseType: 'blob' }
        );
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

export const generateCombinedSRT = async (paths) => {
    try {
        const response = await axios.post(`${BASE_URL}/generate-combined-srt`, 
            { paths },
            { responseType: 'blob' }
        );
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

export const generateAllSRT = async (paths) => {
    try {
        const response = await axios.post(`${BASE_URL}/generate-all-srt`, 
            { paths },
            { responseType: 'blob' }
        );
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

const handleApiError = (error) => {
    if (error.response) {
        const { data, status } = error.response;
        return {
            message: data.error || 'Server error',
            status,
            timestamp: data.timestamp
        };
    }
    return {
        message: error.message || 'Network error',
        status: 500,
        timestamp: new Date().toISOString()
    };
};