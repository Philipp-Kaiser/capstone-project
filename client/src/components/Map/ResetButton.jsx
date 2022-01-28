import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";

export default function ResetButton({ onResetRoadtrip }) {
  const [backupQuestion, setBackupQuestion] = useState(false);
  const backupHandler = () => {
    setBackupQuestion(!backupQuestion);
  };

  return (
    <>
      <StyledResetButton onClick={backupHandler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enable-background='new 0 0 24 24'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#ffffff'>
          <g>
            <path d='M0,0h24v24H0V0z' fill='none' />
          </g>
          <g>
            <g>
              <path d='M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z' />
              <path d='M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z' />
            </g>
          </g>
        </svg>
      </StyledResetButton>
      <Modal
        onBackupHandler={backupHandler}
        handleRoadtrip={onResetRoadtrip}
        backupQuestion={backupQuestion}>
        reset
      </Modal>
    </>
  );
}

const StyledResetButton = styled.button`
  box-sizing: content-box;
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  margin-left: 5.5rem;
  margin-bottom: 5rem;
  padding: 0.75rem 0.75rem 0.6rem 0.75rem;
  border: none;
  border-radius: 50%;
  background-color: var(--black);
  color: white;
  cursor: pointer;
`;