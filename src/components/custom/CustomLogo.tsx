import { Link } from "react-router";

interface Props {
  subtitle?: string;
}

export const CustomLogo = ({ subtitle = "Shop" }: Props) => {
  return (
    <>
      <Link to="/" className="flex items-center whitespace-nowrap">
        <span className="m-0 whitespace-nowrap font-montserrat font-bold text-xl">
          Teslo |
        </span>
        <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
          {subtitle}
        </p>
      </Link>
    </>
  );
};
