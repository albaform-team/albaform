import * as S from '@/pages/store/_components/Button.style';

type ButtonVariant = 'text' | 'contained' | 'outlined';

type BasicButtonType = {
  variant: ButtonVariant;
  text: string;
};

export default function BasicButtons({ variant, text }: BasicButtonType) {
  return (
    // variant : Text, contained, outlined
    <S.BoxContainer variant={variant}>{text}</S.BoxContainer>
  );
}
