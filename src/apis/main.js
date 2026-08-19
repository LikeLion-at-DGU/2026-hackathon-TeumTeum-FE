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

export const postMain = async (targetMinutes) => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.post("/main", {
        guest_uuid: guestUuid,
        target_minutes: targetMinutes,
    });
    
    return response.data;
}

export const getQuestions = async () => {
    const response = await axiosInstance.get("/main/questions")
    
    return response.data;
}

export const postQuestions = async (answers) => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.post("/main/questions",{
        guest_uuid: guestUuid,
        answers,
    })

    return response.data;
}