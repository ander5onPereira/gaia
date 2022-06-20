import {
  Container,
  ButtomStyle,
  Separate,
} from './styled-components/buttonGroup';

interface ButtonGroupProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  options: Array<optionsProps>;
}
interface optionsProps {
  onclick: () => void;
  name: string;
}
export const ButtonGroup = ({
  variant = 'contained',
  size = 'medium',
  color='primary',
  options,
}: ButtonGroupProps) => {
  return (
    <Container variant={variant} size={size}>
      {options.map((option, index) => {
        return (
          <>
            <ButtomStyle
              color={color}
              onClick={option.onclick}
              variant={variant}
              size={size}
            >
              {option.name}
            </ButtomStyle>
            {index !== options.length - 1 && variant!=='outlined'  && <Separate color={color}/>}
          </>
        );
      })}
    </Container>
  );
};
