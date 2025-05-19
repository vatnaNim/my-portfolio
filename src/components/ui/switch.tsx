
import styled from 'styled-components';

interface SwitchProps {
  isDarkMode: boolean;
  toggleColorMode: () => void;
}

const Switch = ({ isDarkMode, toggleColorMode }: SwitchProps) => {
  return (
    <StyledWrapper>
      <div className="toggle-cont">
        <input
          className="toggle-input"
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleColorMode}
        />
        <label className="toggle-label" htmlFor="toggle">
          <div className="cont-icon">
            {/* Add sparkles and the SVG as needed */}
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
              <path
                d="M0.96233 28.61C1.36043..."
                fill="currentColor"
              />
            </svg>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-cont {
    --primary: #54a8fc;
    --light: #d9d9d9;
    --dark: #121212;
    --gray: #414344;
    width: 50px;
    height: 50px;
    position: relative;
  }

  .toggle-input {
    display: none;
  }

  .toggle-label {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .icon {
    width: 100%;
    height: 100%;
    fill: var(--primary);
  }

  /* Additional styles for sparkles can go here */
`;

export default Switch;
