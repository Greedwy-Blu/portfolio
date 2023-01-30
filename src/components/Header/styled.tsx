import styled from 'styled-components'


export const HeaderButton = styled.button`
<!-- HTML !-->


  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


&:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

&:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
     padding: 13px 50px 13px;

}
`;


export const Border = styled.div`
border-radius: 137px 137px 154px 154px;
	background-color: #d4cea476;
	opacity: 0.7;
	color: #fff;
	line-height: 213px;
	text-align: center;
	width: 336px;
	height: 513px;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

}

  `;