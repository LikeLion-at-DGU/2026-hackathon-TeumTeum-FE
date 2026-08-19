import axiosInstance from "./axiosInstance";
import { getGuestUuid } from "../utils/guestUuid";

export const getMagazines = async () => {
    const gestUuid = getGuestUuid();

    const response = await axiosInstance.get("/magazines", {
        params: {
            guest_uuid: gestUuid,
        },
    });

    return response.data;
}