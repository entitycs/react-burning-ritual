import {Filter} from './Filter/PipeFilter';
import {numberToHex} from '../Util/input.js';
import {parseImages, parseSpans, parseParagraphs} from './Parse/ElementParser';
import {controllerSetDuration, controllerSetGrid, controllerSetPaper, controllerSetFont} from '../UX/controller.js';

/**
 * filterSet
 * 
 * @param {*} onFilterChange 
 * @returns 
 */
 function filterSet(onFilterChange){
    return [
      <Filter key={"textParsing"}
        content={(value, state, acc) => {
          if (!value) value = 'Farewell Twitter https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png';
          let content = acc;//Array.isArray(acc) ? acc : [];//acc || [];
          if (! parseParagraphs(value, content, {img:true})){
            if (! parseSpans(value, content, {img:true})){
              if (! parseImages(value, content, {img:true})){
              content.push(<p key={Math.random().toString(16) + content.length}>{value}</p>);
              }
            }
          }
          return content;
        }}
      />,
      <Filter name={"grid"} key={"grid"}
        event={(value, state, acc) =>{         
          console.log("grid event state", state, "value", value, "acc", acc)

          if (state && (state.xLength || state.yLength)){
            let newGridOptions = {data:[], option:{}};
            if(state.xLength && !isNaN(state.xLength.value)){
              newGridOptions.option.xLength = state.xLength.value;
            }
            if(state.yLength && !isNaN(state.yLength.value)){
              newGridOptions.option.yLength = state.yLength.value;
            }
            return {newGrid: {...newGridOptions.option}};
          }else{
            return {...state, value: value};
          }
        }}

        onFilterChange={onFilterChange}
        controllerSet={controllerSetGrid}
      />,
      <Filter name={"duration"} key={"fireEffect"} 
        style={(value, state, acc)=>{
          if (! isNaN(state.duration.value)){
            return {
              animationLetter: `letterAnim ${state.duration.value}s cubic-bezier(1, 0.3, 0, 1.02) 0s normal forwards`,
              animationSmoke: `smokeAnim ${state.duration.value}s cubic-bezier(.14,.73,.96,.09) 0s normal forwards`,
              animationFire: `flameAnim ${state.duration.value}s cubic-bezier(.14,.73,.96,.09) 0s normal forwards`,
            };
          }
          else return {};
        }} 
        onFilterChange={onFilterChange}
        controllerSet={controllerSetDuration}
      />,
      <Filter name={"pos"} key={"gridPosition"} 
        style={(value, acc)=>{ 
          let rotate = Math.floor(Math.random() * 40) * (Math.floor(Math.random() * 100) %2 === 0 ? -1 : 1);
          return {transform : `rotate(${rotate}deg)`}
        }}
        onFilterChange={onFilterChange}
      />,
      <Filter name={"paperEffect"} key={"paperEffect"} 
        style={(value, state, acc)=>{
          if (!state){
            state = {opacity:{value:210}, bgColor:{value:'#cdae9f'}, color:{value:'#080808'}};
          }
          let backgroundColor, color;
          if (state.bgColor.value){
            backgroundColor = state.bgColor.value;
            if (state.opacity && !isNaN(state.opacity.value)){
              backgroundColor += numberToHex(state.opacity.value);
            }
          }
          else {
            backgroundColor = '#eeeeeedd';
          }
          if (state.color){
            color = state.color.value;
          }
          let item =  {
            backgroundColor,
            color
          };
          return {...item};
        }}
        onFilterChange={onFilterChange}
        controllerSet={controllerSetPaper} 
      />,
      <Filter name={"fontSize"} key={"fontSize"}
      style={(value, state, acc) => {
        let a = {fontSize: (state?.fontSize?.value || 6) + 'em'};
        return state ? {burningElement: {...state.burningElement || {}, ...a}} : {burningElement: {...a}};
      }}
    
      onFilterChange={onFilterChange}
      controllerSet={controllerSetFont}
    />,
    ];
  }//filterSet

  export {filterSet};