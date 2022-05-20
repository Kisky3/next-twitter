import React, { useState } from "react";

function Input() {
    const [input, setInput] = useState("");

    const [selectedFile, setSelectedFile] = useState();

    return (
        <div
            className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
        >
            <img
                src="https://pbs.twimg.com/media/Ewl5M1rVoAMruoR.jpg"
                alt=""
                className="h-11 w-11 rounded-full cursor-pointer"
            />
            <div className="w-full divide-y divide-gray-700">
                <div className={``}>
                    <textarea
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                        value={input}
                        row="2"
                        placeholder="What's happening?"
                    />


                </div>
            </div>
        </div>
    );
}

export default Input;
