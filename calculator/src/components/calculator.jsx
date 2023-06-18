import ButtonKeyboard from "./ButtonKeyboard";
import Display from "./Display";
import { useState } from "react";
import { evaluate } from "mathjs";

export const Calculator = () => {
    let globalExpression = 0;
    let globalExpressionResult = 0;
    let resultFixed = 0;

    const [value, setValue] = useState("");

    function digit(number) {
        setValue(value + number);
    }

    function result() {
        if (value) {
            try {
                globalExpression = value;
                setValue("");
                globalExpressionResult = evaluate(globalExpression);
                console.log(globalExpression);
                resultFixed = globalExpressionResult.toString().includes(".")
                    ? globalExpressionResult.toFixed(2)
                    : globalExpressionResult;
                setValue(resultFixed);
            } catch (error) {
                alert('Syntax Error - Please add some valid input')
            }
        } else {
            alert("Please add some input");
        }
    }

    function resetDisplay() {
        setValue("");
    }

    return (
        <>
            <div className="main-container flex justify-center items-center flex-col w-60 h-100 border border-solid border-gray-400 rounded-md mb-60 shadow-2xl backdrop-blur-sm bg-white/30">
                <Display
                    className={
                        "input input-bordered rounded-md w-5/6 mt-5 font-bold font-sans text-2xl flex justify-end items-center"
                    }
                    values={value}
                />
                <div className="keyboard flex flex-col gap-1 mt-5 mb-5">
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent="("
                            handlerEvent={() => digit("(")}
                        />
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent=")"
                            handlerEvent={() => digit(")")}
                        />
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent="%"
                            handlerEvent={() => digit("%")}
                        />
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent="+"
                            handlerEvent={() => digit("+")}
                        />
                    </div>
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="7"
                            handlerEvent={() => digit("7")}
                        />
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="8"
                            handlerEvent={() => digit("8")}
                        />
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="9"
                            handlerEvent={() => digit("9")}
                        />
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent="-"
                            handlerEvent={() => digit("-")}
                        />
                    </div>
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="4"
                            handlerEvent={() => digit("4")}
                        />
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="5"
                            handlerEvent={() => digit("5")}
                        />
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="6"
                            handlerEvent={() => digit("6")}
                        />
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent="*"
                            handlerEvent={() => digit("*")}
                        />
                    </div>
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="1"
                            handlerEvent={() => digit("1")}
                        />
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="2"
                            handlerEvent={() => digit("2")}
                        />
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="3"
                            handlerEvent={() => digit("3")}
                        />
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent="/"
                            handlerEvent={() => digit("/")}
                        />
                    </div>
                    <div className="keyboard-container flex flex-row gap-1">
                        <ButtonKeyboard
                            className="btn btn-error btn-outline w-12 font-bold text-xl"
                            htmlContent="C"
                            handlerEvent={() => resetDisplay()}
                        />
                        <ButtonKeyboard
                            className="btn w-12 text-xl"
                            htmlContent="0"
                            handlerEvent={() => digit("0")}
                        />
                        <ButtonKeyboard
                            className="btn btn-primary btn-outline w-12 font-bold text-xl"
                            htmlContent="."
                            handlerEvent={() => digit(".")}
                        />
                        <ButtonKeyboard
                            className="btn btn-outline w-12 font-bold text-xl"
                            htmlContent="="
                            handlerEvent={() => result()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
