// src/components/ui/Button.tsx
import styled from 'styled-components';
import { theme } from '../../styles/themes';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: ${theme.radii.md};
  cursor: ${({ disabled, isLoading }) => (disabled || isLoading ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  background: ${theme.colors.gradient};
  color: white;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover:not(:disabled):not([data-loading]) {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.hard};
  }

  &:active:not(:disabled):not([data-loading]) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(99, 102, 241, 0.4);
    outline-offset: 2px;
  }

  &[data-loading] {
    cursor: wait;
  }
    border-radius: ${theme.radii};
  background: ${theme.colors.primary};
  padding: 0.875rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover:not(:disabled):not([data-loading]) {
    background: ${theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(147, 51, 234, 0.4);
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Button = ({
  children,
  type = 'button',
  isLoading = false,
  fullWidth = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      fullWidth={fullWidth}
      isLoading={isLoading}
      disabled={disabled || isLoading}
      data-loading={isLoading || undefined}
      {...props}
    >
      {isLoading && <Spinner />}
      {children}
    </StyledButton>
  );
};