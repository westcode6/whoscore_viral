import React from "react";
const GameStatus = ({ status }) => {
    return (
        <div className="p-2 rounded-xl text-xs">
            {status}
        </div>
    );
};

export default GameStatus;