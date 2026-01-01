import Image from 'next/image';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import SearchImage from '@/assets/svg/search.svg';
import * as S from '@/components/layout/header/_components/Search/SearchForm.style';

type Props = {
  initialValue?: string | string[] | undefined;
};

const SearchForm = ({ initialValue }: Props) => {
  const [value, setValue] = useState<string>(
    typeof initialValue === 'string' ? initialValue : ''
  );

  const router = useRouter();

  useEffect(() => {
    if (typeof initialValue === 'string') {
      setValue(initialValue);
    } else {
      setValue('');
    }
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      router.push('/store');
    }
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
