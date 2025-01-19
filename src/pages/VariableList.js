import React from 'react';

const listTarget = [
  { id: 1, title: 'ホームページ'},
  { id: 2, title: 'TOPページ'},
  { id: 3, title: 'ボタンサンプルページ'},
  { id: 4, title: 'ログイン後ページ'},
  { id: 5, title: '可変リストページ'},
];

const listItems = listTarget.map(target =>
  <li key={target.id}>
    {target.title}
  </li>
);

const VariableList = () => {
  return (
    <ul>{listItems}</ul>
  );
};

export default VariableList;
