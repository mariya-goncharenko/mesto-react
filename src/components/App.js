import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
  <div className="page">
    <Header/>
    <Main />
    <Footer />

    {/*Pop-up - удалить
    <div className="popup popup_type_delete">
        <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть"></button> 
        <h2 className="popup__title">Вы уверены?</h2>
        <button className="popup__button-save popup__button-save_type_close" type="submit">Да</button>
        </div>
    </div>*/}

  </div>
  );
}

export default App;
