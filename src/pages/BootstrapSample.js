import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapSample = () => {
  return (
    <>
      <div>
        <h1>Bootstrap Sample</h1>
        <p>Bootstrap サンプルページ</p>
      </div>
      <div>
        <div className="container mt-5">
          <h1 className="text-primary">Hello, Bootstrap in React!</h1>
          <button className="btn btn-success">Click Me</button>
        </div>
      </div>
      <div>
        <div class="container custom-container">
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="card">
                <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="画像1" />
                  <div class="card-body">
                    <h5 class="card-title">タイトル1</h5>
                      <p class="card-text">説明文が入ります。</p>
                      <a href="#" class="btn btn-primary">詳しく見る</a>
                  </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="card">
                <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="画像2" />
                  <div class="card-body">
                    <h5 class="card-title">タイトル2</h5>
                      <p class="card-text">説明文が入ります。</p>
                      <a href="#" class="btn btn-primary">詳しく見る</a>
                  </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="card">
                <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="画像3" />
                  <div class="card-body">
                    <h5 class="card-title">タイトル3</h5>
                      <p class="card-text">説明文が入ります。</p>
                      <a href="#" class="btn btn-primary">詳しく見る</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootstrapSample;
