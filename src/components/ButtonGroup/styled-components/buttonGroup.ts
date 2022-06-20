import styled from 'styled-components';
interface ButtonGroupProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
}
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow:${(props: ButtonGroupProps) => props.variant ==='text'?'none':'0px 2px 4px var(--other_overlay);' };
`;
export const ButtomStyle = styled.a`
  padding-left: 2rem;
  padding-right: 2rem;
  min-width:${(props: ButtonGroupProps) => {
    switch (props.size) {
      case 'small':
        return '10';
      case 'medium':
        return '15';
      case 'large':
        return '20';
      default:
        return '15';
    }
  }}rem; 
  height: ${(props: ButtonGroupProps) => {
    switch (props.size) {
      case 'small':
        return '2';
      case 'medium':
        return '2.5';
      case 'large':
        return '3';
      default:
        return '2.5';
    }
  }}rem;
  background: ${(props: ButtonGroupProps) => {
    switch (props.color) {
      case 'primary':
        return props.variant === 'contained' ? 'var(--primary)' : 'transparent';
      case 'secondary':
        return props.variant === 'contained'
          ? 'var(--secondary)'
          : 'transparent';
      case 'error':
        return props.variant === 'contained' ? 'var(--error)' : 'transparent';
      case 'warning':
        return props.variant === 'contained' ? 'var(--warning)' : 'transparent';
      case 'info':
        return props.variant === 'contained' ? 'var(--info)' : 'transparent';
      case 'success':
        return props.variant === 'contained' ? 'var(--success)' : 'transparent';
      default:
        return props.variant === 'contained' ? 'var(--primary)' : 'transparent';
    }
  }};
  border: 1px solid
    ${(props: ButtonGroupProps) => {
      switch (props.color) {
        case 'primary':
          return props.variant !== 'text' ? 'var(--primary)' : 'transparent';
        case 'secondary':
          return props.variant !== 'text' ? 'var(--secondary)' : 'transparent';
        case 'error':
          return props.variant !== 'text' ? 'var(--error)' : 'transparent';
        case 'warning':
          return props.variant !== 'text' ? 'var(--warning)' : 'transparent';
        case 'info':
          return props.variant !== 'text' ? 'var(--info)' : 'transparent';
        case 'success':
          return props.variant !== 'text' ? 'var(--success)' : 'transparent';
        default:
          return props.variant !== 'text' ? 'var(--primary)' : 'transparent';
      }
    }};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  color: ${(props: ButtonGroupProps) => {
      
        if (props.variant === 'contained') {
          return 'var(--white)';
        } else {
          switch (props.color) {
            case 'primary':
              return 'var(--primary)';
            case 'secondary':
              return 'var(--secondary)';
            case 'error':
              return 'var(--error)';
            case 'warning':
              return 'var(--warning)';
            case 'info':
              return 'var(--info)';
            case 'success':
              return 'var(--success)';
            default:
              return 'var(--primary)';
          }
        }
      
    }};
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.75rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  order: 0;
  flex-grow: 0;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(85%);
    ${(props: ButtonGroupProps) =>
      props.variant !== 'contained' && 'background: rgba(0, 0, 0, 0.05);'};
  }
  &:active {
    filter: brightness(70%);
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export const Separate = styled.div`
  width: 1px;
  background: ${(props: ButtonGroupProps) => { 
  switch (props.color) {
    case 'primary':
      return 'var(--primary)';
    case 'secondary':
      return 'var(--secondary)';
    case 'error':
      return 'var(--error)';
    case 'warning':
      return 'var(--warning)';
    case 'info':
      return 'var(--info)';
    case 'success':
      return 'var(--success)';
    default:
      return 'var(--primary)';
  }
  }};
  filter: brightness(85%);
`;
