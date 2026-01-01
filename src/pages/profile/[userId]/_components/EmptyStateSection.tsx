import * as S from './EmptyStateSection.style';

interface Props {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
}

const EmptyStateSection = ({
  title,
  description,
  actionLabel,
  href,
}: Props) => {
  return (
    <section>
      <S.Title>{title}</S.Title>
      <S.ProfileCard>
        <S.Description>{description}</S.Description>
        <S.ActionButton href={href}>{actionLabel}</S.ActionButton>
      </S.ProfileCard>
    </section>
  );
};
export default EmptyStateSection;
