import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
	<div  style={{display: 'flex', justifyContent: 'space-around', width: '100%', background: '#bbc', position: 'absolute', top: 0}}>
		<NavLink to={'/login'} >
			<p>Login</p>
		</NavLink>
		<NavLink to={'/'} >
			<p>Home</p>
		</NavLink>
		<NavLink to={'/register'} >
			<p>Register</p>
		</NavLink>
	</div>
  )
}

export default NavBar