import  React from 'react'
const HeaderSection = ({title, buttons}) => {
  return (
    <div className='section'>
					{ buttons ? 
							<span>
								Anunciamos nuestra próxima ronda de financiación. <a href="#">Leer más →</a>
							</span>
						: ''
					}
					<h1>{title}</h1>
					<p>
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
						lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
						fugiat aliqua.
					</p>
					{
						buttons ?
							<a className='button-started' href='#main'>
								Empezar →{" "}
							</a>
						: ''
					}
				</div>
  )
}
export default HeaderSection