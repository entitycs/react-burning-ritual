
/**
 * FauxEvent
 * 
 * Object simulating value available from React.SyntheticEvent
 * 
 * @param {*} value 
 * @returns 
 */
function FauxEvent(name, value, thisContext){
    return {target: {...thisContext, name, value}};
}

export {FauxEvent};