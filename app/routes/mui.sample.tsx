import { MuiButton } from "../components/mui/MuiButton";
import { MuiAccordion } from "../components/mui/MuiAccordion";

export default function Index() {
  return (
    <>
      <MuiButton>Sample</MuiButton>
      <MuiAccordion title="sample" contents={["sampl1", "sample2", "sample3"]} />
    </>
  );
}
