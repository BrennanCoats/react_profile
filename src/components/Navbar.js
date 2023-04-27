import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Brennan Coats</h3>
			<nav ref={navRef}>
				<a href="/">About Me</a>
				<a href="/Contact">Contact Me</a>
				<a href="/Projects">Projects</a>
				<a href="/Resume">Resume</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
