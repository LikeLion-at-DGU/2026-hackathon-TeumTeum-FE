const DEFAULT_ERROR_MESSAGE = "문제가 발생했어요. 다시 시도해주세요.";

export const extractErrorMessage = (
  responseBody,
  fallbackMessage = DEFAULT_ERROR_MESSAGE,
) => {
  if (!responseBody || typeof responseBody !== "object") {
    return fallbackMessage;
  }

  if (typeof responseBody.detail === "string" && responseBody.detail.trim()) {
    return responseBody.detail;
  }

  for (const value of Object.values(responseBody)) {
    if (Array.isArray(value)) {
      const firstMessage = value.find(
        (message) => typeof message === "string" && message.trim(),
      );

      if (firstMessage) return firstMessage;
    }
  }

  return fallbackMessage;
};
