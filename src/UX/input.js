/**
 * inputElement
 * 
 * @param {*} inputState 
 * @param {*} onChange 
 * @returns 
 */
const inputElement = (inputState = 'Farwell Twitter https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png', onChange) => { 
 //function inputElement(inputState, onChange){
    return <label key={"inputText"}>
      <textarea key={"inputTextarea"}
        placeholder="eg: Farewell Twitter https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png"
        onChange={onChange}
        value={inputState}
      />
    </label>
  }//inputElement

 function submitElement(onSubmitInput){
     return <button name={"submitInput"} onClick={onSubmitInput} type="submit">Burn It</button>
 }//submitElement

 export {inputElement, submitElement};