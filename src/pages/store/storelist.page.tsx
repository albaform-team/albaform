import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ListCard from '@/components/ListCard/ListCard';
import * as S from '@/pages/store/storelist.page.style';

const storelist = () => {
  return (
    <>
      <Header user="user" />
      <S.JobSuggestSection>
        <S.JobSuggestTitle>맞춤 공고</S.JobSuggestTitle>
        <div>
          <S.JobSuggestList>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </S.JobSuggestList>
        </div>
      </S.JobSuggestSection>
      <Footer />
    </>
  );
};

export default storelist;
