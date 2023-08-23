
function App() {
  return (
    // убрал декорации текста
  <div className="wrapper clear"> 
  {/* сделал весь хедар дисплей флекс и прочее */}
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img className="rounded-logo" width="60px" height="60px" src="/img/logo.png" alt="logo"></img>
        <div>
          <h3 className="text-uppercase">QAZNIGHT</h3>
           <p>Магазин брендовых вещей</p>
        </div>          
     </div>
       {/* сделал весь ul дисплей флекс и прочее */}
     <ul className="d-flex">
      {/* сделал отстут 30px */}
      <li className="mr-30">
      <img width="25px" height="25px" src="img/cart.svg" alt="cart"></img>
          <span>2000тг</span>        
      </li>
      <li>
      <img width="25px" height="25px" src="img/user.svg" alt="user"></img>
      </li>
     </ul>
      </header>
    <div className="content p-40">
      <h1> Все носки</h1>
      <div className="d-flex">
      <div className="card">
        <img className="items d-flex justify-between" width={158} height={200} src="img/socks/Jordan Essentials.webp" alt="Jordan Essentials"/>
        <p>Jordan Essentials</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex">
            <span>Цена:</span>
            <b>3700тг</b>
          </div>
          <button>
            <img width={11} height={11} src="img/btn-plus.svg" alt="button"></img>
          </button>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
export default App;
