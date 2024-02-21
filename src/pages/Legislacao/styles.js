import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 40px;
  min-height: 80vh;
`;

export const Title = styled.span`
  font-size: 40px;
  display: block;
  margin-bottom: 32px;
`;

export const Text = styled.span`
  font-size: 22px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const DownloadArea = styled.div`
  width: 60%;
  height: 80px;
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ButtonDownload = styled.a`
  width: 50%;
  height: 100%;
  background-color: var(--cor-primaria);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  gap: 16px;
  padding: 12px 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: var(--cor-primaria-light);
    color: var(--cor-primaria);
    border: 3px solid var(--cor-primaria);
  }
`;
