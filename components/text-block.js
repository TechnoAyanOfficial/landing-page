const TextBlock = ({ children }) => {
	return (
		<div className="text-block">
			<div className="separator"></div>
			{children}
		</div>
	);
};

export default TextBlock;
