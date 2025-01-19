import React from 'react';

const isLoggedIn = false;

const AfterLogin = () => {
  let content;
  if (isLoggedIn) {
    content = <div>ログインしています。</div>;
  } else {
    content = <div>ログインしていません。</div>;
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default AfterLogin;
