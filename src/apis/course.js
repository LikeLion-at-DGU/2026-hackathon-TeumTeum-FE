import { getGuestUuid } from "../utils/guestUuid";
import axiosInstance from "./axiosInstance";

// 최초 추천코스 생성
export const createRecommendedCourse = async () => {
    const guestUuid = getGuestUuid();
    const response = await axiosInstance.post("/main/teumteum", {
        guest_uuid: guestUuid,
    });
    return response.data;
};

// 추천 코스 새로고침
export const refreshRecommendedCourse = async () => {
  const guestUuid = getGuestUuid();

  const response = await axiosInstance.post(
    "/main/teumteum/refresh",
    {
      guest_uuid: guestUuid,
    },
  );

  return response.data;
};

// 코스 상세화면 실행
export const startCourse = async (courseId) => {
    const guestUuid = getGuestUuid();
    const response = await axiosInstance.post(
        `/main/teumteum/${courseId}`, 
        {
            guest_uuid: guestUuid,
        },
    );
    return response.data;
}

// 코스타이머 일시정지
export const pauseCourse = async (executionId) => {
    const guestUuid = getGuestUuid();
    const response = await axiosInstance.post(
        `/main/teumteum/${executionId}/pause`,
        {
            guest_uuid: guestUuid,
        }
    );
    return response.data;
};

// 코스 타이머 재개
export const resumeCourse = async (executionId) => {
  const guestUuid = getGuestUuid();

  const response = await axiosInstance.post(
    `/main/teumteum/${executionId}/resume`,
    {
      guest_uuid: guestUuid,
    },
  );

  return response.data;
};

// 코스 실행 중단
export const stopCourse = async (executionId) => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.post(
        `/main/teumteum/${executionId}/stop`,
        {
        guest_uuid: guestUuid,
        },
    );

    return response.data;
};

// 코스 완료 및 기록 저장
export const completeCourse = async (executionId) => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.post(
        `/main/teumteum/${executionId}/complete`,
        {
        guest_uuid: guestUuid,
        },
    );

    return response.data;
};

// 완료된 코스 만족도 평가
export const rateCourse = async (executionId, satisfaction) => {
    const guestUuid = getGuestUuid();

    const response = await axiosInstance.post(
        `/main/teumteum/${executionId}/rate`,
        {
            guest_uuid: guestUuid,
            satisfaction,
        },
    );

    return response.data;
};
