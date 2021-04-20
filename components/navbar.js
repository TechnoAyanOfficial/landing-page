import Image from "next/image"

const Navbar = () => {
	return (
		<nav className="navigation container">
			<div className="logo">
				<Image src="/images/logo.svg" alt="GOD logo" width={200} height={200} />
			</div>
			<ul className="navigation__links inversed">
				<li>
					<a href="https://blog.gameofdefi.finance/" target="_blank">Blog</a>
				</li>
				<li>
					<a href="https://docs.gameofdefi.finance" target="_blank">Docs</a>
				</li>
				<li>
					<a href="http://presale.gameofdefi.finance/" target="_blank">Presale</a>
				</li>
				<li>
					<a href="http://app.gameofdefi.finance/" target="_blank">Dapp</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
