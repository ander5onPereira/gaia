import {
  Container,
  ButtomStyle,
  Separate,
} from './styled-components/buttonGroup';

interface ButtonGroupProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  direction?: 'row' | 'column';
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
  direction='column',
  options,
}: ButtonGroupProps) => {
  return (
    <Container direction={direction} variant={variant} size={size}>
      {options.map((option, index) => {
        return (
          <>
            <ButtomStyle
              color={color}
              onClick={option.onclick}
              variant={variant}
              size={size}
              direction={direction}
            >
              {option.name}
            </ButtomStyle>
            {index !== options.length - 1 && variant!=='outlined'  && <Separate direction={direction} color={color}/>}
          </>
        );
      })}
    </Container>
  );
};
