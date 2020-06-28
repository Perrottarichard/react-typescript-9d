export interface HeaderProps {
    courseName: string;
}
export interface ContentProps {
    courseParts: {
        name: string;
        exerciseCount: number;
    }[];
}
export type TotalProps = ContentProps;