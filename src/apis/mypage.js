import axiosInstance from "./axiosInstance";
import { getGuestUuid } from "../utils/guestUuid";

export const getMypage = async () => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.get("/mypage", {
        params: {
            guest_uuid: guestUuid,
        }
    });

    return response.data;
}