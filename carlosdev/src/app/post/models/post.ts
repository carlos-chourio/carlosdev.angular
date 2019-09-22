//import { Guid } from "guid-typescript";
import { IUser } from '../../common-utilities/user';

export interface Post {
  id: number;// Guid;
  title: string;
  content: string;
  author: IUser;
  comments: Comment[];
}
