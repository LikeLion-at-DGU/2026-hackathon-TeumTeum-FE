import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.article`
  width: 100%;
  padding-bottom: 220px;
`;

export const VideoPlayer = styled.iframe`
  position: relative;
  left: 50%;
  z-index: 1;
  display: block;
  width: min(760px, calc(100vw - 32px));
  max-width: calc(100vw - 32px);
  aspect-ratio: 16 / 9;
  transform: translateX(-50%);
  border: 0;
  background: ${theme.colors.black};
  pointer-events: auto;
  touch-action: manipulation;
`;

export const ChipContainer = styled.div`
  min-height: 24px;
  padding: 16px 20px 0;
`;

export const Content = styled.div`
  padding: 16px 20px;
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: ${theme.fontsize.lg};
  font-weight: ${theme.fontWeight.semibold};
`;

export const ChannelName = styled.p`
  color: ${theme.colors.gray};
  font-size: ${theme.fontsize.sm};
`;

export const ContentTabs = styled.section`
  margin-top: 24px;
`;

export const TabMenu = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${theme.colors.catagory};

  button {
    padding: 10px 12px;
    border: 0;
    background: transparent;
    color: ${theme.colors.news};
    font-size: ${theme.fontsize.catagory};
    cursor: pointer;
  }
`;

export const TabPanel = styled.div`
  padding-top: 18px;
`;

export const VideoDescription = styled.p`
  color: ${theme.colors.news};
  font-size: ${theme.fontsize.catagory};
  line-height: 1.6;
`;

export const AiSummary = styled(VideoDescription)``;
