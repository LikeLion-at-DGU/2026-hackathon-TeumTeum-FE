import axiosInstance from "./axiosInstance";
import { getGuestUuid } from "../utils/guestUuid";

export const getMain = async () => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.get("/main", {
        params: {
        guest_uuid: guestUuid,
        },
    });
    
    localStorage.getItem("guest_uuid")

    return response.data;
};