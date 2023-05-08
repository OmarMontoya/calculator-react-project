import React from "react";
import ButtonKeyboard from "./ButtonKeyboard";
import Display from "./Display";

export const Calculator = () => {


    return (
        <>
            <div className="main-container flex justify-center items-center flex-col w-60 h-80 border border-solid border-gray-400 rounded-md mb-60 shadow-2xl backdrop-blur-sm bg-white/30">
                <Display
                    className="input input-bordered rounded-md w-5/6 mt-5"
                />
                <div className="keyboard flex flex-col gap-1 mt-5 mb-5">
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="7" />
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="8" />
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="9" />
                        <ButtonKeyboard className="btn btn-outline w-12 font-bold text-xl" htmlContent="+" />
                    </div>
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="4" />
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="5" />
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="6" />
                        <ButtonKeyboard className="btn btn-outline w-12 font-bold text-xl" htmlContent="-" />
                    </div>
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="1" />
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="2" />
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="3" />
                        <ButtonKeyboard className="btn btn-outline w-12 font-bold text-xl" htmlContent="x" />
                    </div>
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard className="btn btn-error btn-outline w-12 font-bold text-xl" htmlContent="C" />
                        <ButtonKeyboard className="btn w-12 text-xl" htmlContent="0" />
                        <ButtonKeyboard className="btn btn-primary btn-outline w-12 font-bold text-xl" htmlContent="=" />
                        <ButtonKeyboard className="btn btn-outline w-12 font-bold text-xl" htmlContent="/" />
                    </div>
                </div>
            </div>
        </>
    );
};
