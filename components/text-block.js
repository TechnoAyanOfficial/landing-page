const TextBlock = ({ children }) => {
	return (
		<div className="text-block">
			{children}
			<div className="separator"></div>
		</div>
	);
};

export default TextBlock;
