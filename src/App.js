import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function ItrerateList () {
  let array = ["추천원두", "원두커피", "콜드블루", "선물세트", "카페용품", "과일청"]
  let array1 = []
  for (let i = 0; i < array.length; i++) {
    array1.push(<li className='header_div1_ul_li'><a className='header_div1_ul_li_a' href="#">{ array[i] }</a></li>)
  }
  return array1
}

function ItrerateList2 () {
  let array = ["이벤트", "로그인", "회원가입", "고객센터", "(장바구니)", "(검색)", "(리스트)"]
  let array1 = []
  for (let i = 0; i < array.length; i++) {
    array1.push(<li className='header_div2_ul_li'><a className='header_div2_ul_li_a' href="#">{ array[i] }</a></li>)
  }
  return array1
}

function Header () {
  return  <header className='header'>
            <h1 className='header_h1'><a href="#"></a>커피에 미친 남자</h1>
            <div className='header_div1'>
              <ul className='header_div1_ul'>
                { ItrerateList() }
              </ul>
            </div>
            <div className='header_div2'>
              <ul className='header_div2_ul'>
                { ItrerateList2() }
              </ul>
            </div>
          </header>
    
}

function Main () {
  return  <main>
            <div className='main_div1_img'></div>
            <div className='main_div2'>
              <h2 className='main_div2_h2'>베스트</h2>
            </div>
            {Array.from({ length: 3 }).map(() => (
              <div className='main_div3'>
                {Array.from({ length: 4 }).map(() => (
                  <GridExample></GridExample>
                ))}
              </div>
            ))}
          </main>
}

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;