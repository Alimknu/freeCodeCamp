const { useState } = React;

export const ColorPicker = () => {
  const [colorChosen, chooseColor] = useState("#ffffff");

  function handleColorInput(event) {
    event.preventDefault();
    chooseColor(event.target.value);
  }

  return (
    <div id="color-picker-container" style={{ backgroundColor: colorChosen }}>
      <input
        id="color-input"
        type="color"
        onChange={handleColorInput}
        value={colorChosen}
      ></input>
    </div>
  );
};
