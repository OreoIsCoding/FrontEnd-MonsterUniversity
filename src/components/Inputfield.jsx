import React from 'react';

const InputField = ({ label, type = 'text', value, placeholder, onChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full md:w-96 xs:h-10 p-3 border text-sm
                 border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-[0.5px]
                  focus:ring-blue-500
                   focus:border-blue-500 
                   placeholder:italic
                    placeholder:text-gray-400"
            />
        </div>
    );
};

export default InputField;
