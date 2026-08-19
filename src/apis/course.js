import { getGuestUuid } from "../utils/guestUuid";
import axiosInstance from "./axiosInstance";

// C: 최초 추천코스 생성
export const createRecommendedCourse = async () => {
    const guestUuid = getGuestUuid();
    const response = await axiosInstance.post("/main/teumteum", {
        guest_uuid: guestUuid,
    });
    return response.data;
};