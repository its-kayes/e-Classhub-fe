import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type StateSetter = (value: string) => void;

type IFields = {
  label: string;
  value: string;
}[];

export default function RadioButtonsGroup({
  title,
  state,
  fields,
}: {
  title: string;
  state: StateSetter;
  fields: IFields;
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
        {fields.map((item) => (
          <FormControlLabel
            value={item.value}
            onClick={() => handleClick(item.value)}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
