import Image from "next/image";

const Roadmap = () => {
	return (
		<div className="roadmap container">
			<div className="roadmap__image">
				<Image width={500} height={800} src="/images/roadmap_onlydrake.png" />
			</div>
			<div className="roadmap__items">
				<div className="roadmap__item">
					<div className="roadmap__item-title">
						Q<span className="n">2 2021</span>
					</div>
					<ul>
						<li>deploying token on bsc and pivate presale</li>
						<li>public presale</li>
						<li>locking or burning our liquidity</li>
						<li>cmc, coingecko, dappradar listing</li>
						<li>marketing, amas</li>
						<li>
							start of version <span className="n">1</span> of our yield farm
						</li>
						<li>new partnerships</li>
					</ul>
				</div>
				<div className="roadmap__item">
					<div className="roadmap__item-title">
						Q<span className="n">3 2021</span>
					</div>
					<ul>
						<li>introducing the altar leveling nft system</li>
						<li>
							introducing god v<span className="n">2+</span> god gold token
						</li>
						<li>link the altar leveling nft system with farms/pools</li>
						<li>marketing, amas, listing</li>
						<li>starting to develop our own dex/amm</li>
						<li>introducing private launchpools and pools</li>
						<li>introducing god wars {"(lottery)"} feature</li>
						<li>new partnerships</li>
					</ul>
				</div>
				<div className="roadmap__item">
					<div className="roadmap__item-title">
						Q<span className="n">4 2021</span>
					</div>
					<ul>
						<li>
							introducing nft marketplace, our own unique nfts and new game
							modes
						</li>
						<li>marketing, amas, listing</li>
						<li>new partnerships</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
