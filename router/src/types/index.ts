export interface PersonInter{
    id:string;
    name: string;
    age: number;
}
export interface NewsInter{
    id:string;
    title: string;
    content: string;
}

export type Persons = Array<PersonInter>;
// export type Persons = PersonInter[];
export type News = Array<NewsInter>;