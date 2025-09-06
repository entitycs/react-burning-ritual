/**
 * inputElement
 * 
 * @param {string} inputState 
 * @param {*} onChange 
 * @returns 
 */
const inputElement = (inputState = '', onChange) => {
  return <label key={"inputText"}>
    <textarea key={"inputTextarea"}
      placeholder="eg: Farewell Twitter https://images.gr-assets.com/authors/1718224641p5/15042371.jpg"
      onChange={onChange}
      value={inputState}
    />
  </label>
}

function submitElement(onSubmitInput) {
  return <button name={"submitInput"} onClick={onSubmitInput} type="submit">Burn It</button>
}

export { inputElement, submitElement };