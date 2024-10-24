// Button.tsx
import { baseButton } from "./ButtonStyles";

interface ButtonProps {
  isLoading?: boolean; 
  size?: 'xs' | 'md' | 'lg'; 
  imgSrc?: string; 
  altText?: string; 
  hoverColor?: string; 
  onClick?: () => void; 
  children?: React.ReactNode;
  imgWidth?: string; 
  imgHeight?: string;
  rounded?: 'sm' | 'lg' | 'full'; 
}

export default function Button({
  isLoading,
  size,
  imgSrc,
  altText,
  onClick,
  children,
  imgWidth = '24px', 
  imgHeight = '24px',
  hoverColor = 'hover:bg-colorInput', 
  rounded = 'full', 
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseButton({ size, color: 'transparent', rounded })} ${hoverColor} transition duration-200`} 
      onClick={onClick}
      {...rest}
    >
      {imgSrc && 
      <img src={imgSrc} 
      alt={altText} 
      style={{ width: imgWidth, height: imgHeight }}
      className={`w-[${imgWidth}] h-[${imgHeight}]`}
      
      />}
      {children}
      {isLoading && <span className="ml-2">Loading...</span>}  
    </button>
  );
}
