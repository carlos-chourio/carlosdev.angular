//import { Guid } from "guid-typescript";
import { IUser } from '../../common-utilities/user';

export interface IComment {
    id: number;// Guid;
    title: string;
    content: string;
    date: Date;
    author: IUser; 
}
