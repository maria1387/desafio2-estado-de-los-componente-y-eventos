const Input = ({type, placeholder, onChange,className, value, children}) => {
	return (
		<>
			<input type={type} placeholder ={placeholder} className={className} onChange={onChange}
			value={value} />
		{children}	
		</>
	)
};

export default Input;
