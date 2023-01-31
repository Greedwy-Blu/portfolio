import styled from 'styled-components'

export const Background = styled.div`
 max-width: 600px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;

`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 150px;
  width: 500px;
	height: 500px;
  backgroundColor: #942424;
  borderRadius: 10px;
  color: black;

`;