import { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import {
  Container,
  ButtomStyle,
  Separate,
  Split,
  Icon,
} from './styled-components/buttonGroupSplit';

interface ButtonGroupProps {
  variant?: 'default' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  button: buttonProps;
}
interface buttonProps {
  onclick: () => void;
  name: string;
}
export const ButtonGroupSplit = ({
  variant = 'default',
  size = 'medium',
  color = 'primary',
  button,
}: // options,
  ButtonGroupProps) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <ButtomStyle
        color={color}
        onClick={button.onclick}
        variant={variant}
        size={size}
      >
        {button.name}
      </ButtomStyle>
      <Separate color={color}/>
      <Split
        color={color}
        onClick={()=>setActive(!active)}
        variant={variant}
        size={size}
      >
        <Icon data-active={active} variant={variant} color={color}>
        <RiArrowUpSLine/>
        </Icon>

      </Split>
    </Container>
  );
};
