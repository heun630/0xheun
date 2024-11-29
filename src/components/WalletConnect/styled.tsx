import styled from '@emotion/styled';

export const Container = styled.div`
  background: #121212;
  border-radius: 15px;
  padding: 20px;
  width: 400px;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  background: ${({ active }) => (active ? '#2a2a2a' : '#1c1c1c')};
  color: ${({ active }) => (active ? '#ffffff' : '#888888')};
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2a2a2a;
  }
`;

export const WalletList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

export const WalletItem = styled.div`
  background: #1c1c1c;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2a2a2a;
  }

  img {
    width: 30px;
    height: 30px;
  }

  span {
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
  }
`;
