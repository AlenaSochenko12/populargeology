import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BaseButton = styled(Button)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '240px',
  gridTemplateRows: '40px',
  marginTop: '40px',
  paddingTop: '10px',
  boxSizing: 'border-box',
  border: '1px solid rgb(255, 255, 255)',
  borderRadius: '68px',
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  color: '#FFF8F2',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '20px',
  textDecoration: 'none',
  textTransform: 'none',
  transition: 'all 0.3s ease',

  '&:hover': {
    border: '1px solid #E55C22',
    color: '#E55C22',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
}));

export const SliderButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  onClick,
  sx = {},
  ...props
}) => {
  return (
    <BaseButton
      variant={variant}
      color={color}
      onClick={onClick}
      sx={sx}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
