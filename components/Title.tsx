import { orbitron } from "@/app/fonts";
function Title({ children, className }: TitleProps) {
  return (
    <h1 className={`text-3xl font-bold py-2 ${className}`}>
      {children}
    </h1>
  );
}

export default Title;
