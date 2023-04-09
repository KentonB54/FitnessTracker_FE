import React from 'react'                           

const Home = () => {

  const imageURL = "https://s.abcnews.com/images/International/gy_putin_dc_011718_2x3_992.jpg"
  return (
    <div>
      <h2>Добро пожаловать в ваше фитнес-путешествие</h2>
      <img src={imageURL}></img>
    </div>

  )
}

export default Home