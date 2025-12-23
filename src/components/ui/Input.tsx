// src/components/ui/Input.tsx
import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/themes';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  error?: string;
  showPasswordToggle?: boolean;
  [key: string]: any; // para {...register('name')}
}

// Wrapper principal (contém label + input + erro)
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

// Label acima do input
const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.colors.text};
`;

// Container relativo para posicionar o ícone de olho
const InputContainer = styled.div`
  position: relative;
`;

// Input estilizado
const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  padding-right: ${({ type }) => (type === 'password' ? '3rem' : '1rem')};
  font-size: 1rem;
  background: ${theme.colors.background};
  border: 1px solid ${({ hasError }) => (hasError ? theme.colors.error : theme.colors)};
  border-radius: ${theme.radii.md};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${theme.colors.textLight};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.15);
  }
`;

// Botão do ícone de olho
const IconButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.colors.textLight};
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${theme.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    border-radius: 4px;
  }
`;

// Mensagem de erro
const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.error};
  min-height: 1.25rem;
  margin-top: 0.25rem;
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      placeholder,
      error,
      showPasswordToggle = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;
    const hasError = !!error;

    return (
      <Wrapper>
        <Label htmlFor={props.name}>{label}</Label>
        <InputContainer>
          <StyledInput
            id={props.name}
            type={inputType}
            placeholder={placeholder}
            hasError={hasError}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${props.name}-error` : undefined}
            ref={ref}
            {...props}
          />
          {type === 'password' && showPasswordToggle && (
            <IconButton
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </IconButton>
          )}
        </InputContainer>
        {error && (
          <ErrorMessage id={`${props.name}-error`} role="alert">
            {error}
          </ErrorMessage>
        )}
      </Wrapper>
    );
  }
);

Input.displayName = 'Input';