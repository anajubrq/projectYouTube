
  const classNameBySize = {
    small: "p-3",
  };
  const classNameByHover = {
    primary: 'hover:bg-[#121212]',
    secondary: 'hover:bg-[#212121]',
  };
  const classNameByRounded = {
    sm:'rounded-sm',
    md:'rounded-md',
    full:'rounded-full'
  }
  interface ButtonIconProps {
    variant?: 'primary' | 'secondary'; 
    size?: 'small';           
    children: React.ReactNode; 
    onClick?: () => void;
    roundedVariant?: 'sm'|'md'|'full'
  }
  export default function ButtonIcons({
    size = 'small',      
    variant = 'primary', 
    roundedVariant = 'full',
    children,
    onClick,
  }: ButtonIconProps) {
    return (
      <button
        className={`flex items-center justify-center ${classNameBySize[size]} ${classNameByHover[variant]} ${classNameByRounded[roundedVariant]}`} 
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  