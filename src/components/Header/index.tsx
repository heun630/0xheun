import React from 'react';

import * as S from './styled';

type HeaderProps = {
  title: string;
  location: Location;
};

const Header: React.FC<HeaderProps> = ({ title, location }) => {
  const { pathname } = location;

  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <div className='pc-only'>
            <S.MenuLink to='/' isselected='false'>
              {title}
            </S.MenuLink>
          </div>
          <div className='mobile-only mobile-logo'>
            <S.MenuLink to='/' isselected='false'>
              H
            </S.MenuLink>
          </div>
        </div>
        <S.Menu>
          <S.MenuLink to='/posts' isselected={pathname.includes('/posts').toString()}>
            posts
          </S.MenuLink>
          <S.MenuLink to='/about' isselected={(pathname === '/about').toString()}>
            about
          </S.MenuLink>
          <S.MenuLink to='/guestbook' isselected={(pathname === '/guestbook').toString()}>
            guestbook
          </S.MenuLink>
          <S.MenuLink to='/portfolio' isselected={(pathname === '/portfolio').toString()}>
            portfolio
          </S.MenuLink>
          <S.WalletButton to='/walletConnect' isselected={(pathname === '/walletConnect').toString()}>wallet connect</S.WalletButton>
        </S.Menu>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
