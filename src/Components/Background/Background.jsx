import React from 'react'
import './background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({playStatus, heroCount}) => {
  if (playStatus) {

    return (
      <video className="background fade-in" autoPlay loop muted> // создание видео-плеера с автовоспроизведением, зацикленное и в муте
        <source src={video1} type='video/mp4'/> // ну тут понятно источник плеера и тип файла
      </video>
  )
}
  else if (heroCount === 0){
    return <img src={image1} className='background fade-in' alt='image 1'/>
  }
  else if (heroCount === 1){
    return <img src={image2} className='background fade-in' alt='image 2'/>
  }
  else if (heroCount === 2){
    return <img src={image3} className='background fade-in' alt='image 3'/>
  }
}

export default Background
