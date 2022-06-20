import styled from 'styled-components';
interface ButtonGroupProps {
  variant?: 'default' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow:0px 2px 4px var(--other_overlay);
`;
export const ButtomStyle = styled.a`
  padding: 0.5rem 1rem;
  min-width:${(props: ButtonGroupProps) => {
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
  height: ${(props: ButtonGroupProps) => {
    switch (props.size) {
      case 'small':
        return '1.5';
      case 'medium':
        return '2';
      case 'large':
        return '2.5';
      default:
        return '2';
    }
  }}rem;
  background: ${(props: ButtonGroupProps) => {
    switch (props.color) {
      case 'primary':
        return props.variant === 'default' ? 'var(--primary)' : 'transparent';
      case 'secondary':
        return props.variant === 'default'
          ? 'var(--secondary)'
          : 'transparent';
      case 'error':
        return props.variant === 'default' ? 'var(--error)' : 'transparent';
      case 'warning':
        return props.variant === 'default' ? 'var(--warning)' : 'transparent';
      case 'info':
        return props.variant === 'default' ? 'var(--info)' : 'transparent';
      case 'success':
        return props.variant === 'default' ? 'var(--success)' : 'transparent';
      default:
        return props.variant === 'default' ? 'var(--primary)' : 'transparent';
    }
  }};
  border: 1px solid
    ${(props: ButtonGroupProps) => {
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
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  color: ${(props: ButtonGroupProps) => {
      
        if (props.variant === 'default') {
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
      props.variant !== 'default' && 'background: rgba(0, 0, 0, 0.05);'};
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
export const Split = styled.a`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
cursor: pointer;
  height: ${(props: ButtonGroupProps) => {
    switch (props.size) {
      case 'small':
        return '1.5';
      case 'medium':
        return '2';
      case 'large':
        return '2.5';
      default:
        return '2';
    }
}}rem;
width:${(props: ButtonGroupProps) => {
    switch (props.size) {
      case 'small':
        return '1.5';
      case 'medium':
        return '2';
      case 'large':
        return '2.5';
      default:
        return '2';
    }
}}rem;
  background: ${(props: ButtonGroupProps) => {
    switch (props.color) {
      case 'primary':
        return props.variant === 'default' ? 'var(--primary)' : 'transparent';
      case 'secondary':
        return props.variant === 'default'
          ? 'var(--secondary)'
          : 'transparent';
      case 'error':
        return props.variant === 'default' ? 'var(--error)' : 'transparent';
      case 'warning':
        return props.variant === 'default' ? 'var(--warning)' : 'transparent';
      case 'info':
        return props.variant === 'default' ? 'var(--info)' : 'transparent';
      case 'success':
        return props.variant === 'default' ? 'var(--success)' : 'transparent';
      default:
        return props.variant === 'default' ? 'var(--primary)' : 'transparent';
    }
  }};
  border: 1px solid
    ${(props: ButtonGroupProps) => {
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
  &:hover {
    filter: brightness(85%);
    ${(props: ButtonGroupProps) =>
      props.variant !== 'default' && 'background: rgba(0, 0, 0, 0.05);'};
  }
  &:active {
    filter: brightness(70%);
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: none;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
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

export const Icon = styled.div`
  background: ${(props: ButtonGroupProps) => {
    switch (props.color) {
      case 'primary':
        return props.variant === 'default' ? 'var(--primary)' : 'transparent';
      case 'secondary':
        return props.variant === 'default'
          ? 'var(--secondary)'
          : 'transparent';
      case 'error':
        return props.variant === 'default' ? 'var(--error)' : 'transparent';
      case 'warning':
        return props.variant === 'default' ? 'var(--warning)' : 'transparent';
      case 'info':
        return props.variant === 'default' ? 'var(--info)' : 'transparent';
      case 'success':
        return props.variant === 'default' ? 'var(--success)' : 'transparent';
      default:
        return props.variant === 'default' ? 'var(--primary)' : 'transparent';
    }
  }};
  color: ${(props: ButtonGroupProps) => {   
      if (props.variant === 'default') {
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
  
  &[data-active=true] {
    transform: rotate(0deg);
  }
  transform: rotate(180deg);
`;