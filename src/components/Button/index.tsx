
import { cloneElement } from "react"
import { RiStarFill } from "react-icons/ri"
import { ButtomStyle } from "./styled-components/buttom"
interface ButtonProps {
  variant?: "contained" | "outlined" | "text",
  color?: "primary" | "secondary" | "error" | "warning"  | "info" | "success",
  size?: "small" | "medium" | "large",
  onClick: () => void,
  disabled?: boolean,
  type?: "button" | "submit" | "reset",
  fullWidth?: boolean,
  icon?: React.ReactElement,
  text?: string,
  mode?: "default" | "left-icon" | "rigth-icon" | "fab-extended"|'fab-round'| 'icon-button',
}
const sizeIcon = {
  small: "1.2rem",
  medium: "1.5rem",
  large: "2.5rem",
}
const colorIcon = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  error: "var(--error)",
  warning: "var(--warning)",
  info: "var(--info)",
  success: "var(--success)",
  default: "var(--white)",
}
export const Button = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  type = "button",
  fullWidth = true,
  icon = <RiStarFill/>,
  text = 'Botão',
  onClick,
  mode='default'}: ButtonProps) => {
    return (
      <ButtomStyle
        type={type}
        onClick={onClick}
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        mode={mode}
      >
        {(mode==="left-icon"||mode==="fab-extended"||mode==='fab-round'||mode==='icon-button') && cloneElement(icon, {
          style: {
            color: variant === 'contained' && mode!=='icon-button' ? colorIcon["default"] : colorIcon[color],
            fontSize: sizeIcon[size]
          }
        })} 
        {mode !== 'fab-round'&&mode !== 'icon-button' && <span>{text}</span>}
        {mode ==='rigth-icon' && cloneElement(icon, {
          style: {
            color: variant === 'contained' ? colorIcon["default"] : colorIcon[color],
            fontSize: sizeIcon[size]
          }
        })} 
      </ButtomStyle>
    )
}
