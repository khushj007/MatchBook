interface Props {
  name: string;
  type: string;
  setValue: any;
  value: any;
  min?: string;
  max?: string;
}

const Input = ({
  type,
  name,
  setValue,
  value,
  min = "0",
  max = "100",
}: Props) => {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
