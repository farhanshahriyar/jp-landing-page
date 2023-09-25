import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="app-page-header">
          <p>warpleについて</p>
          <h1>ABOUT</h1>
        </div>

        <div className="app-container">
          <div className="app-page-main-part-1-header-text">
            <h1>WHAT IS warple</h1>
            <h2>warpleって?</h2>
          </div>

          <div className="app-page-main-part-1-body">
            <div className="image">
              <img src="bg-1.svg" alt="img" />
            </div>
            <div className="body-text">
              <h1>
                留学を、<br />
                もっとかしこく、<br />
                おもしろく。
              </h1>
              <hr />
              <p>warple は、語学学校/プログラムの検索や申込み、渡航</p>
              <p>までの準備や学校/宿泊先の手配まで留学に必要なすべ</p>
              <p>てをインターネット上で完結させることにより、どこよりも安</p>
              <p>く、どこよりもあなたらしく、留学が実現できるサービスです。</p>
            </div>
          </div>

          <button>
            <span>初めての方へ</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="white" />
              <path d="M3.12598 10.4253H14.118L10.382 6.68896V10.7329" stroke="#1A35C9" />
            </svg>
          </button>

          <div className="app-page-main-part-2-header-text">
            <h1>POINT</h1>
            <h3>warpleの3つのポイント</h3>
          </div>

          <div className="app-page-main-part-2-body">
            <div>
              <section>
                <img src="bg-2.svg" alt="img" />
                <div>
                  <h4>どこよりも <br />安く留学できる</h4>
                  <hr />
                  <p>warple は、お申し込みから渡航の準備まで留学に関わる
                    すべてをWEB上で完結させることで、語学学校に直接申し
                    込むよりも安い費用で留学することが可能です。</p>
                </div>
              </section>

              <section>
                <img src="bg-3.svg" alt="img" />
                <div>
                  <h4>どこよりも <br />安く留学できる</h4>
                  <hr />
                  <p>語学学校/宿泊先の空き状況やキャンペーン情報をリアル
                    タイムで知ることができるため、warpleならいつでもどこでも
                    申し込んだり留学準備を進めることができます。</p>
                </div>
              </section>
            </div>
            <div>
              <section>
                <img src="bg-4.svg" alt="img" />
                <div>
                  <h4>どこよりも <br />安く留学できる</h4>
                  <hr />
                  <p>語学学校と直接繋がることができるシステムになっており、
                    現地のリアルで正確な情報を知ることができるため、自分で
                    自由に情報を見ながら留学プランを決めることができます。
                    ※語学学校と1on1のチャットができるのは申し込み後です。</p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="app-page-main-part-3-container">
          <div className="app-page-main-part-3">
            <div className="header-text">
              <h1>POINT</h1>
              <h3>こんなひとにおすすめ!</h3>
            </div>

            <div className="body-1-text">
              <section>
                <img src="bg-5.svg" alt="img" />
                <p>とにかく安く申し込みたい方</p>
              </section>
              <hr />
              <section>
                <img src="bg-5.svg" alt="img" />
                <p>希望の国やプランが決まっている方</p>
              </section>
              <hr />
              <section>
                <img src="bg-5.svg" alt="img" />
                <p>現地スタッフと直接やりとりをしたい方</p>
              </section>
              <hr />
              <section>
                <img src="bg-5.svg" alt="img" />
                <p>自分のペースで留学プランを探したい方</p>
              </section>
              <hr />
            </div>

            <div className="header-text">
              <h1>REASON</h1>
              <h3>最低価格保証を実現できる理由</h3>
            </div>

            <div className="body-2-text">
              <section>
                <img src="bg-6.svg" alt="img" />
                <div>
                  <h4>いつでもどこでも申し込める</h4>
                  <hr />
                  <p>語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでも
                    どこでも申し込んだり留学準備を進めることができます。</p>
                </div>
              </section>
              <section>
                <img src="bg-6.svg" alt="img" />
                <div>
                  <h4>いつでもどこでも申し込める</h4>
                  <hr />
                  <p>語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでも
                    どこでも申し込んだり留学準備を進めることができます。</p>
                </div>
              </section>
              <section>
                <img src="bg-6.svg" alt="img" />
                <div>
                  <h4>いつでもどこでも申し込める</h4>
                  <hr />
                  <p>語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでも
                    どこでも申し込んだり留学準備を進めることができます。</p>
                </div>
              </section>

            </div>
            <div className="image-3">
              <img src="bg-7.svg" alt="img" />

            </div>

          </div>

          <div className="body-3-text">
            <h1>会員登録でお得なクーポン <br />
              プレゼント中!</h1>
            <button>
              <span>簡単30秒！会員登録</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="white" />
                <path d="M3.12598 10.4253H14.118L10.382 6.68896V10.7329" stroke="#1A35C9" />
              </svg>
            </button>
          </div>

          <div className="image-4">
            <img src="bg-8.svg" alt="img" />
          </div>
        </div>

      </main>

      <footer></footer>
    </>
  );
}

export default App;
