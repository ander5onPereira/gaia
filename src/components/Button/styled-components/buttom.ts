import styled from 'styled-components';
interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  mode?:
    | 'default'
    | 'left-icon'
    | 'rigth-icon'
    | 'fab-extended'
    | 'fab-round'
    | 'icon-button';
}
export const ButtomStyle = styled.a`
  ${(props: ButtonProps) =>
    props.disabled &&
    'pointer-events: none;filter: grayscale(30%) opacity(40%);'}
  width: ${(props: ButtonProps) => {
  if (props.mode !== 'fab-round' && props.mode!=='icon-button') {
    switch (props.size) {
      case 'small':
        return '8';
      case 'medium':
        return '10';
      case 'large':
        return '12';
      default:
        return '10';
    }
  } else {
    switch (props.size) {
      case 'small':
        return '2.5';
      case 'medium':
        return '3.5';
      case 'large':
        return '4.5';
      default:
        return '3.5';
    }
  }
  }}rem;
  height: ${(props: ButtonProps) => {
  if (props.mode !== 'fab-round'&&props.mode !== 'fab-extended') {
    switch (props.size) {
      case 'small':
        return '2';
      case 'medium':
        return '3';
      case 'large':
        return '4';
      default:
        return '3';
    }
  } else {
    switch (props.size) {
      case 'small':
        return '2.5';
      case 'medium':
        return '3.5';
      case 'large':
        return '4.5';
      default:
        return '3.5';
    }
  }
}
}rem;
  background: ${(props: ButtonProps) => {
  if (props.mode === 'icon-button') {
    return 'transparent';
  }
    
    // if (!props.disabled) {
      switch (props.color) {
        case 'primary':
          return props.variant === 'contained'
            ? 'var(--primary)'
            : 'transparent';
        case 'secondary':
          return props.variant === 'contained'
            ? 'var(--secondary)'
            : 'transparent';
        case 'error':
          return props.variant === 'contained' ? 'var(--error)' : 'transparent';
        case 'warning':
          return props.variant === 'contained'
            ? 'var(--warning)'
            : 'transparent';
        case 'info':
          return props.variant === 'contained' ? 'var(--info)' : 'transparent';
        case 'success':
          return props.variant === 'contained'
            ? 'var(--success)'
            : 'transparent';
        default:
          return props.variant === 'contained'
            ? 'var(--primary)'
            : 'transparent';
      }
    // } else {
    //   return 'var(--action_disable_bg)';
    // }
  }};
  border: 1px solid
    ${(props: ButtonProps) => {
  if (props.mode === 'icon-button') {
    return 'transparent';
  }
      // if (!props.disabled) {
        switch (props.color) {
          case 'primary':
            return props.variant !== 'text' ? 'var(--primary)' : 'transparent';
          case 'secondary':
            return props.variant !== 'text'
              ? 'var(--secondary)'
              : 'transparent';
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
      // } else {
      //   return 'var(--action_disable_bg)';
      // }
    }};
  border-radius: ${(props:ButtonProps)=>props.mode==='fab-round'||props.mode==='fab-extended' || props.mode==='icon-button' ?'5rem':'5px'};
  cursor: pointer;
  box-shadow: ${(props: ButtonProps) => {
  if (props.mode === 'icon-button') {
    return 'transparent';
  }
  return props.variant !== 'text' ? '0px 2px 4px var(--other_overlay)' : 'none'
}};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
  span {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: ${(props: ButtonProps) => {
      if (!props.disabled || props.variant !== 'contained') {
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
      } else {
        return 'var(--white)';
      }
    }};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  &:hover {
    filter: brightness(85%);
    ${(props: ButtonProps) =>
      props.variant !== 'contained' && 'background: rgba(0, 0, 0, 0.05);'};
  }
`;
