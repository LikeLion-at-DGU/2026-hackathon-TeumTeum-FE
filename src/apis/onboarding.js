import axiosInstance from "./axiosInstance";
import { getGuestUuid } from "../utils/guestUuid";

export const getOnboardingQuestions = async () => {
    const response = await axiosInstance.get("/onboarding/questions");
    return response.data;
};

export const saveOnboardingAnswers = async (
    answers
    ) => {
    const response = await axiosInstance.post(
        "/onboarding/",
        {
        guest_uuid: getGuestUuid(),
        answers,
        }
    );

    return response.data;
    };