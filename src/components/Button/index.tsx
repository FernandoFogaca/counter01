import { ButtonHTMLAttributes } from "react";
import "./styles.css"

interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement>{ 
    children:React.ReactNode;
    onClick?:()=>void;
};

export const Button = ({children, onClick }:ButtonProps) => {   
    return <button onClick={onClick} className="btn">{children}</button>;
};

