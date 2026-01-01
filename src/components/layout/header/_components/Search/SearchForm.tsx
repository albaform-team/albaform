import Image from 'next/image';
import { useRouter } from 'next/router';

import { useState } from 'react';

import SearchImage from '@/assets/svg/search.svg';
import * as S from '@/components/layout/header/_components/Search/SearchForm.style';

const SearchForm = () => {
  const [value, setValue] = useState<string>('');

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/store/search?q=${value}`);
  };

  return (
    <S.SearchBox onSubmit={handleSubmit}>
      <Image src={SearchImage} alt="검색" width={20} height={20} />
      <input
        name="q"
        value={value}
        placeholder="가게 이름으로 찾아보세요"
        onChange={handleChange}
      ></input>
    </S.SearchBox>
  );
};

export default SearchForm;
