import * as React from 'react';

import { Bio as BioType } from '@/src/type';
import { capitalize } from '@/src/utils/capitalize';
import thumbnail from '../../../assets/thumbnail.jpg';
import * as S from './styled';

type BioProps = {
  bio: BioType;
};

const Bio: React.FC<BioProps> = ({ bio }) => {
  return (
    <S.Wrapper>
      <img src={thumbnail} alt="thumbnail" style={{ width: "250px", marginBottom: "30px"}} />
      <S.InfoWrapper>
        {Object.entries(bio).map(([key, value]) => (
            <S.Info key={key}>
              <strong>{capitalize(key)}.</strong> {value}
            </S.Info>
          ))}
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default Bio;
