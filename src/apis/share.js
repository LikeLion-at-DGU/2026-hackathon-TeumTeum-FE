import axiosInstance from "./axiosInstance";
import { getGuestUuid } from "../utils/guestUuid";

export const processSharedUrl = async (url) => {
  if (import.meta.env.VITE_SHARE_TARGET_MOCK === "true") {
    return {
      id: 12,
      title: "목·어깨 스트레칭 5분 루틴",
      thumbnail_url: "https://i.ytimg.com/vi/xxxx/mqdefault.jpg",
      channel_name: "틈틈 웰니스",
      estimated_minutes: 5,
      tags: ["스트레칭"],
      message: "다음 스트레칭 코스에 이 영상이 우선 반영될 예정이에요!",
    };
  }

  const response = await axiosInstance.post(
    "/main/share",
    {
      guest_uuid: getGuestUuid(),
      url,
    },
    {
      timeout: 20000,
    },
  );

  return response.data;
};
