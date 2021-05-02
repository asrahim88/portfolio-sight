import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypeWrite = () => {
    return (
        <>
        <ReactTypingEffect
                text={[
                    "Frontend developer",
                    "AnD",
                    "Backend Developer"
                ]}
                cursorRenderer={cursor => <h1 className="text-info">{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span className="text-info"
                                        key={key}
                                        style={ {fontFamily:"sans-serif" }}
                                    >{char}</span>
                                );
                            })}
                        </h1>
                    );
                }}
            />
        </>
    );
};

export default TypeWrite;