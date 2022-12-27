import "./App.css";

function App() {
	return (
		<>
			<header>
				<nav>
					<a href='#'>Comic Logo</a>
					<a href='#'>Comics</a>
					<a className='login-button' href='#'>
						Iniciar Sesión
					</a>
				</nav>
				<div className='section'>
					<span>
						Anunciamos nuestra próxima ronda de financiación. <a href="#">Leer más →</a>
					</span>
					<h1>Tu tienda de comics favorita</h1>
					<p>
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
						lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
						fugiat aliqua.
					</p>
					<a className='button-started' href='#main'>
						Empezar →{" "}
					</a>
				</div>
			</header>
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
			<footer>
				<div className='section-footer'>
					<img className='logo' src='./assets/images/logo.png' alt='logo' />
					<p>Comics</p>
				</div>
				<p>©2022 Comic App.</p>
				<div className='pages'>
					<h3>Pages</h3>
					<a href='#'>Comics</a>
				</div>
			</footer>
		</>
	);
}

export default App;
