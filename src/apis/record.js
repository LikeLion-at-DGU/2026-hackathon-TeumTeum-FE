import axiosInstance from "./axiosInstance";
import { getGuestUuid } from "../utils/guestUuid";

export const getRecords = async () => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.get("/records", {
        params: {
            guest_uuid: guestUuid,
        },
    });

    return response.data;
}

export const executeRecord = async (recordId) => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.post(`/records/${recordId}`, 
        {
            guest_uuid: guestUuid,
        },
    );

    return response.data;
}