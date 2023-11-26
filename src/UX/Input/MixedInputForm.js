import React, {useReducer} from 'react';
/**
 * GridForm
 * 
 * Input is cleared on every submission.  The input preview 
 * remains accessible, however, allowing for multiple submissions
 * of the "previous" value.
 * 
 * @typedef {{inputData: *, inputPreview: *}} GridInputState
 * @typedef {{type:string, value: React.SyntheticEvent}} GridInput
 * 
 * @param {{
 *   input: {type: string, value: React.SyntheticEvent}
 * }} props
 * @returns {React.ComponentElement}
 * 
 * @param {React.JSXElementConstructor} props.submit 
 * @param {React.JSXElementConstructor} props.onSubmit 
 */
function MixedInputForm({input, submit, onSubmit}){

  const [inputState, inputDispatch] = useReducer(
    onSetInput,
    {inputData:"", inputPreview:""}
  );

  const { inputData, inputPreview } = inputState;

  /**
   * onSetInput
   * 
   * Reducer for input state (data + preview)
   * 
   * @param{GridInputState} inputState - input state
   * @param {GridInput} input - input type and update event
   * @returns {GridInputState} input state after update
   */
  function onSetInput(inputState, input){
    let result = {};
    switch(input.type){
      case "input":
        result = {inputData: input.value.target.value, inputPreview: input.value.target.value};
        break;
      case "submit":
        result = {inputData: input.value.target.value, inputPreview: inputState.inputPreview};
        break;
      default:
        result = {inputData: inputState.inputData, inputPreview: inputState.inputPreview};
        break;
    }
    return result;  
  }

  /**
   * _onSubmit
   * 
   * @param {React.SyntheticEvent} e 
   */
  function _onSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    inputDispatch({value: e, type: "submit"});
    onSubmit(inputPreview);
  }

  /**
   * _onInput
   * 
   * @param {React.SyntheticEvent} e 
   */
  function _onInput(e){
    inputDispatch({value: e, type: "input"});
  }

  return (
    <form>
    {input(inputData, _onInput)}
    {submit(_onSubmit)}
    </form>
  )
}//GridForm

export {MixedInputForm}
