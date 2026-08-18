const GUEST_UUID_KEY = "guest_uuid";

export const getGuestUuid = () => {
    const savedUuid =
        localStorage.getItem(GUEST_UUID_KEY);

    if (savedUuid) {
        return savedUuid;
    }

    const newUuid = crypto.randomUUID();

    localStorage.setItem(
        GUEST_UUID_KEY,
        newUuid
    );

    return newUuid;
};