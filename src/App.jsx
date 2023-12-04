import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Drive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]
  const [heroCount, setHeroCount] = useState(2); // используем хук useState, что сохранять состояния, чтобы изменить состояние используется setHeroCount
  const [playStatus, setPlayStatus] = useState(true);
  useEffect(() => { // используем хук, чтобы через каждые 3 секунды счетчик сладов увеличивался на один, кароче для перебора слайдов
    setInterval(() => {
      setHeroCount((count) => {return count === 2? 0:count+1}) // обычный тернарный оператор, который увеличивает счетчик и сюрасывает его если он достиг 2
    }, 3000);
  }, []) // эффект будет запускаться только один раз при монтировании компонента и больше не будет запускаться при обновлении компонента
  return (
    <div>
      
      <Background playStatus={playStatus} heroCount={heroCount}/> {/* присваиваем свойства этому компоненту */}
      <Navbar /> 
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      /> {/* принятие компонентов пропсов для отображения информации и упоавдения статусом воспроизведения */}
       
    </div>
  )
}

export default App
