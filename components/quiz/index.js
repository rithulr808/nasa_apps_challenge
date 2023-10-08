import "./quiz.css";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const questions = [
    {
        id: 'question-1',
        text: 'What is the primary objective of NASA\'s Global Precipitation Measurement (GPM) mission?',
        options: [
            { id: 'value-1-1', text: 'Monitoring sea-level rise' },
            { id: 'value-1-2', text: 'Studying the Moon\'s surface composition' },
            { id: 'value-1-3', text: 'Improving global precipitation measurements', correct: true },
        ],
    },
    {
        id: 'question-2',
        text: 'Which space agency collaborates with NASA on the GPM mission?',
        options: [
            { id: 'value-2-1', text: 'ESA (European Space Agency)' },
            { id: 'value-2-2', text: 'JAXA (Japan Aerospace Exploration Agency)\n', correct: true },
            { id: 'value-2-3', text: 'CNSA (China National Space Administration)' },
        ],
    },
    {
        id: 'question-3',
        text: 'In the context of NASA\'s Earth science missions, what does the acronym GPM stand for?',
        options: [
            { id: 'value-3-1', text: 'Global Polar Magnetosphere' },
            { id: 'value-3-2', text: 'Greenhouse Gas Pollution Monitoring' },
            { id: 'value-3-3', text: 'Global Precipitation Measurement', correct: true },
        ],
    },
];


function RadioInput(param1) {
    const notify = () => toast(`Score: ${score}`);

    const [selectedValues, setSelectedValues] = useState({});
    const [score, setScore] = useState(0);

    const handleRadioChange = (questionId, optionId) => {
        setSelectedValues((prevSelectedValues) => ({
            ...prevSelectedValues,
            [questionId]: optionId,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newScore = 0;
        for (const question of questions) {
            const selectedOptionId = selectedValues[question.id];
            if (selectedOptionId && question.options.find((option) => option.id === selectedOptionId)?.correct) {
                newScore++;
            }
        }
        setScore(newScore);
    };

    return (
        <div className="radio-input mx-auto border-t-2 border-stone-200">
            <form onSubmit={handleSubmit}>
                {questions.map((question) => (
                    <div key={question.id} className="m-8">
                        <div className="info">
                            <span className="question">{question.text}</span>
                            <span className="steps">{question.id}/3</span>
                        </div>
                        {question.options.map((option) => (
                            <div key={option.id} >
                                <input
                                    type="radio"
                                    id={option.id}
                                    name={question.id}
                                    value={option.id}
                                    checked={selectedValues[question.id] === option.id}
                                    onChange={() => handleRadioChange(question.id, option.id)}
                                />
                                <label htmlFor={option.id}>{option.text}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit" className="py-8 text-xl font-stone-900 font-bold" onClick={notify}>Submit</button>
            </form>
            {/*<div className="w-full font-sans font-bold py-4 hidden text-stone-600 mx-auto text-6xl  tracking-wide items-center h-full">*/}
            {/*    {score > 0 && notify()}*/}
            {/*</div>*/}
            <ToastContainer />
        </div>
    );
}

export default RadioInput;
