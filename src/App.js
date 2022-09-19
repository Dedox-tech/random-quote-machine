/* eslint-disable no-console */
import React, { useState } from "react";
import quotesData from "./utils/quotesData";

export default function App() {
    const [number, setNumber] = useState(0);

    const handleClickNewQuote = () => {
        setNumber((previousNumber) => {
            let newRandomNumber = Math.floor(Math.random() * quotesData.length);
            while (previousNumber === newRandomNumber) {
                newRandomNumber = Math.floor(Math.random() * quotesData.length);
            }
            return newRandomNumber;
        });
    };

    const urlEncoded = encodeURI(
        `https://twitter.com/intent/tweet?text="${quotesData[number].text}" ${quotesData[number].author}`
    );

    return (
        <div className="flex h-screen items-center justify-center">
            <div
                className="border max-w-sm shadow p-7 mx-5 sm:mx-0"
                id="quote-box"
            >
                <h1 className="text-4xl font-bold ">Random Quote Machine</h1>
                <blockquote className="mt-5">
                    <p id="text"> {quotesData[number].text} </p>
                </blockquote>
                <p id="author" className="mt-2 text-gray-600 italic">
                    {quotesData[number].author}
                </p>
                <div className="mt-5">
                    <a
                        href={urlEncoded}
                        id="tweet-quote"
                        className="mr-5 border p-2 text-yellow-600 border-yellow-600"
                    >
                        Publish a tweet
                    </a>
                    <button
                        type="button"
                        id="new-quote"
                        onClick={handleClickNewQuote}
                        className=" bg-yellow-600 rounded-sm p-2 text-white border shadow"
                    >
                        New quote
                    </button>
                </div>
            </div>
        </div>
    );
}
