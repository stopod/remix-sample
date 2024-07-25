import Button from "~/components/mui/Button";

export default function Index() {
  return (
    <>
      <div className="mb-3">
        <Button label="Button" variant="text"></Button>
      </div>
      <div className="mb-3">
        <Button label="Button" variant="contained"></Button>
      </div>
      <div className="mb-3">
        <Button label="Button" variant="outlined"></Button>
      </div>
    </>
  );
}
