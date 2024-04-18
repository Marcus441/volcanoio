const DropDown = (parameters) => {
    const { options, onChange } = parameters;
    

    const handleOptionSelect = (event) => {
        onChange(event.target.value);
    }

    return (
        <select onChange={handleOptionSelect}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default DropDown;