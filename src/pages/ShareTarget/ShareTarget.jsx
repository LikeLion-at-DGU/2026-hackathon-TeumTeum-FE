import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { processSharedUrl } from "../../apis/share";
import { extractErrorMessage } from "../../utils/extractErrorMessage";

const findHttpUrl = (value = "") => value.match(/https?:\/\/\S+/)?.[0];

const asText = (value, fallback = "") =>
  typeof value === "string" || typeof value === "number"
    ? String(value)
    : fallback;

const getSharedUrl = (urlParam, textParam) => {
  const candidate = findHttpUrl(urlParam) ?? findHttpUrl(textParam);

  if (!candidate) return null;

  try {
    const parsedUrl = new URL(candidate);
    return ["http:", "https:"].includes(parsedUrl.protocol)
      ? parsedUrl.toString()
      : null;
  } catch {
    return null;
  }
};

const ShareTarget = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [sharedContent, setSharedContent] = useState(null);
  const [isUnsupported, setIsUnsupported] = useState(false);
  const hasSubmitted = useRef(false);

  useEffect(() => {
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;

    const sharedUrl = getSharedUrl(
      searchParams.get("url") ?? "",
      searchParams.get("text") ?? "",
    );

    if (!sharedUrl) {
      setErrorMessage("유튜브 영상 링크를 공유해주세요.");
      setIsUnsupported(true);
      setStatus("error");
      return;
    }

    const submitSharedUrl = async () => {
      try {
        const data = await processSharedUrl(sharedUrl);
        setSharedContent(data && typeof data === "object" ? data : {});
        setStatus("success");
      } catch (error) {
        const message = extractErrorMessage(error.response?.data);
        const isUnsupportedUrl =
          error.response?.status === 400 &&
          /(유튜브|youtube|지원.*링크|url)/i.test(message);

        setIsUnsupported(isUnsupportedUrl);
        setErrorMessage(message);
        setStatus("error");
      }
    };

    submitSharedUrl();
  }, [searchParams]);

  return (
    <Container>
      <Card role="status" aria-live="polite">
        <Title>
          {status === "loading" && "공유한 영상을 확인하고 있어요"}
          {status === "success" && "영상을 성공적으로 공유했어요!"}
          {status === "error" &&
            (isUnsupported ? "지원하지 않는 링크예요" : "링크를 공유하지 못했어요")}
        </Title>

        {status === "loading" && (
          <>
            <Spinner aria-hidden="true" />
            <Description>영상 정보를 확인하는 데 잠시 시간이 걸릴 수 있어요.</Description>
          </>
        )}
        {status === "success" && sharedContent && (
          <>
            {typeof sharedContent.thumbnail_url === "string" &&
              sharedContent.thumbnail_url && (
              <Thumbnail
                src={sharedContent.thumbnail_url}
                alt={asText(sharedContent.title, "공유한 영상 썸네일")}
              />
            )}
            <ContentTitle>
              {asText(sharedContent.title, "공유한 영상")}
            </ContentTitle>
            {(asText(sharedContent.channel_name) ||
              asText(sharedContent.estimated_minutes)) && (
              <Meta>
                {[asText(sharedContent.channel_name),
                  asText(sharedContent.estimated_minutes)
                    ? `약 ${asText(sharedContent.estimated_minutes)}분`
                    : null]
                  .filter(Boolean)
                  .join(" · ")}
              </Meta>
            )}
            <Description>
              {asText(sharedContent.message, "공유한 영상이 저장되었어요.")}
            </Description>
          </>
        )}
        {status === "error" && <Description>{errorMessage}</Description>}

        {status !== "loading" && <HomeLink to="/home">홈으로 이동</HomeLink>}
      </Card>
    </Container>
  );
};

export default ShareTarget;

const Container = styled.main`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #f6fbf5;
`;

const Card = styled.div`
  width: min(100%, 360px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 32px 24px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsize.lg};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.5;
  word-break: keep-all;
`;

const Spinner = styled.div`
  width: 38px;
  height: 38px;
  border: 4px solid #e6f2e3;
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 16px;
`;

const ContentTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontsize.md};
  line-height: 1.4;
  word-break: keep-all;
`;

const Meta = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
`;

const HomeLink = styled(Link)`
  margin-top: 8px;
  padding: 12px 24px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
