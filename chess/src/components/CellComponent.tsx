import React from 'react';
import {Cell} from "../models/Cells";
import {FC} from "react";

interface CellsProps {
    cell: Cell
}

const CellComponent: FC<CellsProps> = ({cell}) => {
    return (
        <div
            className={['cell', cell.color].join(' ')}
        ></div>
    );
}

export default CellComponent;