import styled from 'styled-components';

interface iSubmit {
  isDarkMode: boolean;
  text: string;
}

const BtnSubmit = ({ isDarkMode, text }: iSubmit) => {
  return (
    <StyledWrapper $isDarkMode={isDarkMode}>
      <button>
        <span className="button_top py-2 text-base-clamp">{text}</span>
      </button>
    </StyledWrapper>
  );
};

// Use $isDarkMode instead of isDarkMode to avoid DOM warnings
const StyledWrapper = styled.div<{ $isDarkMode: boolean }>`
  button {
    width: 100%;
    --button_radius: 0.75em;
    --button_color: #e8e8e8;
    --button_outline_color: ${({ $isDarkMode }) =>
      $isDarkMode ? '#ffffff' : '#000000'};
    font-weight: bold;
    border: none;
    border-radius: var(--button_radius);
    background: var(--button_outline_color);
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    background: ${({ $isDarkMode }) =>
      $isDarkMode
        ? 'linear-gradient(45deg, #0f2027, #203a43, #2c5364)'
        : 'linear-gradient(45deg, #87CEEB, #00BFFF)'};
  }

  button:hover .button_top {
    transform: translateY(-0.33em);
  }

  button:active .button_top {
    transform: translateY(0);
  }
`;

export default BtnSubmit;
