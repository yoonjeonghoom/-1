import logo from './logo.svg';
import './App.css';

function Header () {
  return  <header className='header'>
            <h1 className='header_h1'><a href="#"></a>커피에 미친 남자</h1>
            <div className='header_div1'>
              <ul className='header_div1_ul'>
                <li className='header_div1_ul_li'><a className='header_div1_ul_li_a' href="#">추천원두</a></li>
                <li className='header_div1_ul_li'><a className='header_div1_ul_li_a' href="#">원두커피</a></li>
                <li className='header_div1_ul_li'><a className='header_div1_ul_li_a' href="#">콜드블루</a></li>
                <li className='header_div1_ul_li'><a className='header_div1_ul_li_a' href="#">선물세트</a></li>
                <li className='header_div1_ul_li'><a className='header_div1_ul_li_a' href="#">카페용품</a></li>
                <li className='header_div1_ul_li'><a className='header_div1_ul_li_a' href="#">과일청</a></li>
              </ul>
            </div>
            <div className='header_div2'>
              <ul className='header_div2_ul'>
                <li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">이벤트</a></li>
                <li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">로그인</a></li>
                <li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">회원가입</a></li>
                <li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">고객센터</a></li>
                <li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">(장바구니)</a></li>
                <li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">(검색)</a></li>
                <li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">(리스트)</a></li>
              </ul>
            </div>
          </header>
    
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className='main_div1_img'></div>
        <div className='main_div2'>
          <h2 className='main_div2_h2'>베스트</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
