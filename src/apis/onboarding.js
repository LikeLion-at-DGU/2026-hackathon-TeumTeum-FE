import client from "./client";
import { getGuestUuid } from "../utils/guestUuid";

export const getOnboardingQuestions = async () => {
    const response = await client.get("/onboarding/questions");
    return response.data;
};

export const saveOnboardingAnswers = async (
    answers
    ) => {
    const response = await client.post(
        "/onboarding",
        {
        guest_uuid: getGuestUuid(),
        answers,
        }
    );

    return response.data;
    };