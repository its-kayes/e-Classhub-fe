import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type StateSetter = (value: string) => void;

export default function RadioButtonsGroup({
  title,
  state,
}: {
  title: string;
  state: StateSetter;
}) {
  const handleClick = (value: string) => {
    state(value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="student"
          onClick={() => handleClick("student")}
          control={<Radio />}
          label="Student"
          checked
        />

        <FormControlLabel
          value="mentor"
          onClick={() => handleClick("mentor")}
          control={<Radio />}
          label="Mentor"
        />
        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
  );
}
