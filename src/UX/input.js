/**
 * inputElement
 * 
 * @param {*} inputState 
 * @param {*} onChange 
 * @returns 
 */
const inputElement = (inputState = 'Farwell https://pngimg.com/uploads/2021_year/2021_year_PNG49.png', onChange) => { console.log("a new textarea");
 //function inputElement(inputState, onChange){
    return <label key={"inputText"}>
      <textarea key={"inputTextarea"}
        placeholder="eg: Farewell https://pngimg.com/uploads/2021_year/2021_year_PNG49.png"
        onChange={onChange}
        value={inputState}
      />
    </label>
  }//inputElement

 function submitElement(onSubmitInput){
     return <button name={"submitInput"} onClick={onSubmitInput} type="submit">Burn It</button>
 }//submitElement

 export {inputElement, submitElement};