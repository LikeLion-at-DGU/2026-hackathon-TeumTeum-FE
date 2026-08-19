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

// 상세 코스 조회
export const getCourseDetail = async () => {
    const response = await axiosInstance.post(
        `/main/teumteum/<int:course_id>`
    );
    return response.data;
}