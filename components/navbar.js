import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
	return (
		<nav className="navigation container">
			<div className="logo">
				<Image src="/images/logo.svg" alt="GOD logo" width={200} height={200} />
			</div>
			<ul className="navigation__links inversed">
				<li>
					<Link href="/">Link</Link>
				</li>
				<li>
					<Link href="/">Link</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
