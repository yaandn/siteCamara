import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  display: block;
`;

export const Notices = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 40px;
  justify-content: center;
`;

export const Card = styled.div`
  width: 30%;
  padding: 24px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--cor-neutra-dark);
  border-radius: 8px;
  background-color: var(--cor-neutra-light);
`;
export const Notice = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;

  img {
    width: 250px;
    height: 200px;
  }
`;

export const Text = styled.span`
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
`;
