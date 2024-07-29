import { Button, ButtonProps as MuiButtonProps } from "@mui/material";

export const MuiButton: React.FC<MuiButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  ...rest
}: MuiButtonProps) => {
  return (
    <Button variant={variant} color={color} {...rest}>
      {children}
    </Button>
  );
};
