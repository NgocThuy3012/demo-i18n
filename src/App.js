import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        
        <button 
          style={{ fontWeight: i18n.resolvedLanguage === 'vn' ? 'bold' : 'normal' }}
          onClick={() => i18n.changeLanguage('vn')}
        >
          Vn
        </button>
        <button 
          style={{ fontWeight: i18n.resolvedLanguage === 'en' ? 'bold' : 'normal' }}
          onClick={() => i18n.changeLanguage('en')}
        >
          En
        </button>
        <div>
          {t('welcome',{name: 'fet'})}
        </div>
      </header>
    </div>
  );
}

export default App;
