import React from "react";
const Home = ({setTitle, setButtons}) => {
	setTitle('Tu tienda de comics favorita')
	setButtons(true)
  return (
    <>
      <main id='main'>
				<div className='slideshow-container'>
					<div className='mySlides fade'>
						<div className='numbertext'>1 / 3</div>
						<img
							src='https://occ-0-300-990.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUhJMx1ZGjVQ6PrRpwkawoR_l5TWtESU4TTngpctPd5SyCN91X2TNF6IAKmXJpv9oISMu_brPcvDToTLAYabaOykcOfpmLeyCDvF.jpg?r=60a'
              style={{width:'100%'}}
              alt=''
						/>
						<div className='text'>Caption Text</div>
					</div>

					<button className='prev' onClick={()=> 1}>
						&#10094;
					</button>
					<button className='next' onClick={()=> 1}>
						&#10095;
					</button>
				</div>
				<br />

				<div style={{textAlign:'center'}}>
					<span className='dot' onClick={()=> 1}></span>
					<span className='dot' onClick={()=> 1}></span>
					<span className='dot' onClick={()=> 1}></span>
				</div>
			</main>
			
    </>
  )
}
export default Home