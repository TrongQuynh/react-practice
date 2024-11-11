
export interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {
    return <button>{label}</button>;
};
