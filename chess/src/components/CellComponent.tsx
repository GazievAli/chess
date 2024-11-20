import React from 'react';
import {Cell} from "../models/Cell";
import {FC} from "react";

interface CellsProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellsProps> = ({cell, selected, click}) => {
    return (
        <div
            className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
            onClick={() => click(cell)}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
}

export default CellComponent;