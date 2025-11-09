import { Center, InlineLine } from "../../components";

interface SenatorHeaderProps {
  logo: string;
  startYear: number;
  endYear: number;
}

function SenatorHeader({ logo, startYear, endYear }: SenatorHeaderProps) {
  return (
    <Center width={"80%"}>
      <img src={logo} alt="Senator Logo" width={"30%"} />
      <InlineLine />
      <h3>
        {startYear} - {endYear}
      </h3>
    </Center>
  );
}

export default SenatorHeader;
