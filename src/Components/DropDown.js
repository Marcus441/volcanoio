const DropDown = (parameters) => {
    const { options, onChange } = parameters;


    const handleOptionSelect = (event) => {
        onChange(event.target.value);
    }

    return (
            <select onChange={handleOptionSelect} className="p-2 border border-gray 300 rounded-md">
                {options.map((option, index) => (
                    <option key={index} value={option} className="py-1">
                        {option}
                    </option>
                ))}
            </select>
    );
}

export default DropDown;