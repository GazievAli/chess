import logo from '../../assets/black-king.png'
import {Colors} from "../Colors";
import {Cell} from "../Cells";

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон"

}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cells: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cells: Cell) {
        this.color = color;
        this.cells = cells;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell) : boolean {
        return true;
    }

    moveFigure(target: Cell) {
        
    }
}