### シリコンバレーの「25%時間」原則とは
---
「25%時間」原則は、従業員が自身の通常の業務時間のうち25%を使って、創造的なプロジェクトや新しいアイデアに取り組むことを奨励するものです。特に有名なのが、Googleがこの原則を採用していることで、GmailやAdSenseなどの人気製品もこの制度から生まれました。

これにより、社員は自分の興味や情熱に基づいたプロジェクトに取り組むことができ、結果として企業に革新と進歩をもたらすことが期待されます。

シリコンバレーの企業が成功する要因の一つとして、このような創造性を重視する文化が挙げられます。

### 2025/02/11に起きたReactプロジェクト作成エラーを解決する記事(GitHub)
[手作業でいくつかのコマンドを実行する](https://github.com/facebook/create-react-app/issues/13873#issuecomment-2611236376)

```bash
npx create-react-app my-app
```

```bash
cd my-app
```

```bash
npm install --save-dev @testing-library/react@latest
```

```bash
npm install web-vitals
```

```bash
npm start
```

### Reactプロジェクトの作り方について、GitHub Copilotの補足
`create-react-app` コマンドは以前は React プロジェクトを作成するための一般的な方法でしたが、現在では `npm init` コマンドを使用する方が推奨されています。以下のコマンドを使用して最新の方法で React プロジェクトを作成できます。

```bash
npm init react-app my-app
```

または、以下のように `npx` コマンドを使用することもできます。

```bash
npx create-react-app my-app
```

もし `create-react-app` がエラーになる場合は、 `npm` や `node` のバージョンを確認し、最新のバージョンにアップデートしてみてください。また、 `create-react-app` のキャッシュをクリアすることで解決することもあります。

```bash
npx clear-npx-cache
```

`npm init react-app` コマンドが推奨されていますが、 `npx create-react-app` も現在でも使用可能です。どちらの方法でも最新の React プロジェクトを作成できます。

### Reactプロジェクトの作り方
---

Reactのプロジェクトを作成するには、以下の手順を実行します。ここでは、Create React Appを使用してReactプロジェクトを設定する方法を説明します。Create React Appは、Reactアプリケーションを簡単にセットアップできるツールです。

### 手順

1. **Node.jsとnpmのインストール**
   まず、Node.jsとnpm（Node Package Manager）がインストールされていることを確認します。まだインストールしていない場合は、[Node.jsの公式サイト](https://nodejs.org/)からダウンロードしてインストールしてください。

2. **Create React Appのインストール**
   Create React Appをグローバルにインストールする必要はありません。以下のコマンドで、プロジェクトを作成時に自動的にインストールされます。

3. **新しいReactプロジェクトの作成**
   ターミナルを開き、以下のコマンドを実行して新しいReactプロジェクトを作成します。

   ```bash
   npm init react-app my-app
   ```

   【注記】「npx create-react-app」のコマンドは非推奨となっている。(npm initの方がよいとのこと)  
   ~~npx create-react-app my-react-app~~

   `my-react-app`の部分は、プロジェクトの名前に置き換えてください。

4. **プロジェクトディレクトリに移動**
   プロジェクトの作成が完了したら、以下のコマンドでプロジェクトディレクトリに移動します。

   ```bash
   cd my-react-app
   ```

5. **開発サーバーの起動**
   プロジェクトディレクトリ内で以下のコマンドを実行して、開発サーバーを起動します。

   ```bash
   npm start
   ```

   これで、ブラウザが自動的に開き、http://localhost:3000 でReactアプリケーションが表示されるはずです。

### 動作サンプル

以下は、作成したReactプロジェクトに含まれる基本的な構造と、簡単なコンポーネントの例です。

#### `src/App.js`

```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>
          This is a simple React application.
        </p>
      </header>
    </div>
  );
}

export default App;
```

#### `src/App.css`

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
```

### 追加のリソース

- [React公式ドキュメント](https://reactjs.org/docs/getting-started.html) - Reactの公式ドキュメントを参照して、さらに詳細な情報を取得できます。

以上で、基本的なReactプロジェクトの作成方法と動作サンプルの紹介は終了です。質問があればお気軽にどうぞ！

### Reactプロジェクトへの新規ページの追加方法
---
`create-react-app`で作成したReactプロジェクトに新しいページを追加するには、以下の手順で進めます。React Routerを使用してページ遷移を実現するのが一般的です。

### 手順

1. **React Routerのインストール**
   React Routerを使用してページを追加するために、`react-router-dom`パッケージをインストールします。

   ```bash
   npm install react-router-dom
   ```

2. **プロジェクト構成の準備**
   新しいページコンポーネントを作成します。例えば、`About`という新しいページを追加する場合。

   **ディレクトリ構成例:**
   ```
   src/
   ├── components/
   ├── pages/
   │   ├── About.js
   ├── App.js
   ├── index.js
   ```

3. **新しいページコンポーネントを作成**
   `src/pages/About.js`に以下の内容を記述します。

   ```javascript
   import React from 'react';

   const About = () => {
       return (
           <div>
               <h1>About Page</h1>
               <p>これは新しいページです。</p>
           </div>
       );
   };

   export default About;
   ```

4. **React Routerを設定**
   `App.js`を編集して、新しいページをルーティングします。

   ```javascript
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
   import About from './pages/About';

   const App = () => {
       return (
           <Router>
               <nav>
                   <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                   </ul>
               </nav>
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/about" element={<About />} />
               </Routes>
           </Router>
       );
   };

   const Home = () => (
       <div>
           <h1>Home Page</h1>
           <p>これはホームページです。</p>
       </div>
   );

   export default App;
   ```

5. **アプリケーションの起動**
   以下のコマンドでアプリケーションを起動し、動作を確認します。

   ```bash
   npm start
   ```

6. **動作確認**
   - `http://localhost:3000/`にアクセスすると「Home Page」が表示されます。
   - `http://localhost:3000/about`にアクセスすると「About Page」が表示されます。

---

### 補足
- **スタイルの追加**: CSSを追加することで見た目をカスタマイズできます。
- **その他のページ**: 新しいページを追加する場合は、同じ手順でコンポーネントを作成して`Route`に追加してください。

必要に応じて、さらに詳しい説明やコード例を提供できます！

### GitHubリポジトリを悪意ある破壊者から守るための設定について
---

### 手順1: 現在のブランチ保護ルールを確認する
1. **有効になっているブランチ保護ルールを確認する:**
   - GitHub上のリポジトリに移動します。
   - **Settings（設定）** > **Branches（ブランチ）** に移動します。
   - デフォルトブランチに適用されている保護ルールを確認します。

2. **「Require pull request reviews before merging」設定が有効かどうか確認する:**
   - この設定がチェックされていることを確認します。この設定は、プルリクエストがマージされる前にレビューが必要であることを要求します。

3. **「Require review from Code Owners」設定が有効かどうか確認する:**
   - この設定がチェックされていることを確認します。この設定は、プルリクエストがマージされる前にコードオーナーからの承認が必要であることを要求します。

### 手順2: ブランチ保護ルールを変更する
1. **リポジトリ管理者がプルリクエストレビューの必要要件を無視できるように保護ルールを調整する:**
   - ブランチ保護ルールで、リポジトリ管理者がルールを無視できるようにする **「Include administrators（管理者を含める）」** オプションを有効にします。これにより、管理者が自分のプルリクエストを承認してマージできるようになります。  
【注記】これは「Bypass list」に「Repository adminRole」を追加する操作を指すと見られる。

2. **自分がコードオーナーであり、自分のプルリクエストを承認できない場合は「Require review from Code Owners」設定を無効にする:**
   - **「Require review from Code Owners（コードオーナーからのレビューを要求する）」** オプションのチェックを外します。これにより、コードオーナーである場合でも自分のプルリクエストを承認してマージできるようになります。

3. **特定のブランチに対してプルリクエストのマージを容易にするため、新しいブランチ保護ルールを作成する（オプション）:**
   - レビューの要件が少ない特定のブランチに対して新しいブランチ保護ルールを作成します。これにより、ブランチ管理においてより柔軟性が得られます。

### フォローアップ手順
- ブランチ保護ルールの変更が問題を解決するかどうかを確認します。
- ブランチ保護ルールを変更した手順とその理由を文書化し、リポジトリの透明性と責任を維持します。

これらの手順を実行することで、ブランチ保護設定により自分のプルリクエストを承認およびマージできない問題を解決できるはずです。

### Reactプロジェクト作成で依存関係エラーが出る場合の対処方法
---

依存関係がバラバラになってしまった場合、以下の手順でクリーンアップし、依存関係をすっきり解決できます。

---

### **① `node_modules` と `package-lock.json` を削除**
まず、既存の依存関係を完全に削除します。

```sh
rm -rf node_modules package-lock.json
```

**Windows の場合（PowerShell）**
```sh
rd /s /q node_modules
del package-lock.json
```

---

### **② npm のキャッシュをクリア**
キャッシュが壊れている可能性があるので、クリアします。

```sh
npm cache clean --force
```

---

### **③ 適切な Node.js のバージョンを確認**
Node.js のバージョンが古かったり、新しすぎたりすると問題が発生することがあります。推奨バージョンに変更するのも手です。

現在のバージョンを確認：
```sh
node -v
```

Node.js を最新の LTS（推奨版）に更新（`nvm` を使っている場合）：
```sh
nvm install --lts
nvm use --lts
```

`nvm` を使っていない場合は、[Node.js公式サイト](https://nodejs.org/) からLTS版をインストール。

---

### **④ `create-react-app` のキャッシュをクリア**
過去にインストールした `create-react-app` のキャッシュが影響している可能性があるので、削除します。

```sh
npx clear-npx-cache
```

---

### **⑤ `create-react-app` を再実行**
クリーンな環境で再度プロジェクトを作成します。

```sh
npx create-react-app interest-ui --use-npm
```

または、依存関係の解決を緩和するオプションをつける：

```sh
npx create-react-app interest-ui --legacy-peer-deps
```

---

### **補足**
もし `create-react-app` のグローバルインストールが影響している可能性がある場合、一度アンインストールするのも手です。

```sh
npm uninstall -g create-react-app
```

そして、再度 `npx` で実行すれば、最新の `create-react-app` を取得できます。

---

これで、React のプロジェクトをクリーンな状態で作成できるはずです！試してみてください。💡

### node関連コマンド
---

- npmのキャッシュクリア
```sh
npm cache clean --force
```

- npxのキャッシュクリア
```sh
npx clear-npx-cache
```

- インストールされているモジュールの確認
```sh
npm list --depth=0
```

- インストールされているグローバルモジュールの確認
```sh
npm list -g --depth=0
```

- グローバルモジュールの削除
```sh
npm uninstall -g <モジュール名>
```

- 全てのグローバルモジュールを削除
```sh
npm ls -g --depth=0 --parseable | grep node_modules/ | xargs npm uninstall -g
```

---
# 以下は最初から本資料(README.md)あった記述
---










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
