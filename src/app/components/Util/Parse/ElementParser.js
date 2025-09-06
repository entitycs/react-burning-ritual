import Image from 'next/image'
/**
 * parseChildren
 * 
 * @param {*} text 
 * @param {*} children 
 * @param {*} todo         list of todos when parsing siblings or children
 * @returns 
 */
function parseChildren(text, children, todo) {
  if (todo.span) {
    let hasChildren = parseSpans(text, children, todo);
    return hasChildren ? children : text;
  }
  else if (todo.img) {
    let hasChildren = parseImages(text, children, todo);
    return hasChildren ? children : text;
  }
}//parseChildren

/**
 * parseGeneric
 * 
 * Separates shared logic and parser specific matching logic
 * 
 * @param {*} text          textual input 
 * @param {*} targetArray   stores parsed text and elements in order of appearance
 * @param {*} pattern       pattern to match for parse
 * @param {*} callback      object containing pre-match, match, and post-match logic
 * 
 * @returns true if parsing was successful, with match, false otherwise
 */
function parseGeneric(text, targetArray, pattern, callback) {
  let results = text.match(pattern);

  if (results) {
    let prevIndex = 0, index = 0, length = 0, tmp = null;

    // loop on each match of pattern, and using the match index, call
    // pre/post/match callbacks as appropriate
    results.map(match => {
      index = text.substring(prevIndex).search(match) + prevIndex;
      length = match.length;

      // [pre]* [index + length]+ [post]*
      if (index > prevIndex) {
        tmp = callback.preMatch(prevIndex, index, length);
        if (tmp) {
          targetArray.push(tmp);
        }
      }
      tmp = callback.match(prevIndex, index, length);
      if (tmp) {
        targetArray.push(tmp);
      }
      prevIndex = index + length;
      return null;
    });// results.map

    tmp = callback.postMatch(prevIndex, index, length);
    if (tmp) {
      targetArray.push(tmp);
    }
    if (prevIndex > 0)
      return true;
  }
  return false;
}//parseGeneric

/**
 * parseImages
 * 
 * @param {*} text         textual input 
 * @param {*} targetArray  stores parsed text and elements in order of appearance
 * @param {*} todo         list of todos if parsing siblings or children
 * 
 * @returns true if images were parsed from text, false otherwise
 */
function parseImages(text, targetArray, todo = []) {// any todos should be leaf elements
  let preMatch = (prevIndex, matchIndex, matchLength) => {
    return text.slice(prevIndex, matchIndex - 1);
  };
  let match = (prevIndex, matchIndex, matchLength) => {
    return <img alt={"burningItemImg"} key={matchIndex} style={{ maxWidth: '100%' }}
      className={"darkening"} src={text.slice(matchIndex, matchIndex + matchLength)} />;
  };
  let postMatch = (prevIndex, matchIndex, matchLength) => {
    if (prevIndex < text.length) {
      return text.slice(prevIndex, text.length);
    }
  }
  return parseGeneric(text, targetArray, /[^ \n]*(\.jpg|\.jpeg|\.png|\.svg|\.gif|\.webp)[\s\\n\\r]*/gi, { preMatch, match, postMatch });
}//parseImages

/**
 * parseParagraphs
 * 
 * @param {*} text         textual input 
 * @param {*} targetArray  stores parsed text and elements in order of appearance
 * @param {*} todo         list of todos if parsing siblings or children
 * 
 * @returns true if newlines were parsed from text, false otherwise
 */
function parseParagraphs(text, targetArray, todo = {}) {
  if (todo.img) {
    todo.span = true;
  }
  let preMatch = (prevIndex, matchIndex, matchLength) => {
    if (matchIndex === prevIndex)
      return <br key={matchIndex + "spaceAbove"} />
    else return null;
  };
  let match = (prevIndex, matchIndex, matchLength) => {
    if (prevIndex === matchIndex) {
      return <br key={matchIndex + "spaceBelow"} />
    }
    else {
      return <p key={matchIndex}>{parseChildren(text.slice(prevIndex, matchIndex), [], todo)}</p>;
    }
  };
  let postMatch = (prevIndex, matchIndex, matchLength) => {
    if (prevIndex < text.length) {
      return <p key={matchIndex}>{parseChildren(text.slice(prevIndex, text.length), [], todo)}</p>
    }
  }
  return parseGeneric(text, targetArray, /(\n|\r)/gi, { preMatch, match, postMatch });
}//parseParagraphs

/**
 * parseSpans
 * 
 * @param {*} text         textual input 
 * @param {*} targetArray  stores parsed text and elements in order of appearance
 * @param {*} todo         list of todos if parsing siblings or children
 * 
 * @returns true if spans were parsed from text successfully, false otherwise
 */
function parseSpans(text, targetArray, todo = {}) {
  let preMatch = (prevIndex, matchIndex, matchLength) => {
    if (matchIndex === prevIndex)
      return <span style={{ color: 'blue' }}>placeholder</span>
    else {
      return <span>{parseChildren(text.slice(prevIndex, matchIndex - 1), [], todo)}</span>
    }
  };
  let match = (prevIndex, matchIndex, matchLength) => {
    return <span>{parseChildren(text.slice(prevIndex, matchIndex + matchLength), [], todo)}</span>;
  };
  let postMatch = (prevIndex, matchIndex, matchLength) => {
    if (prevIndex < text.length) {
      console.log("postMatch", prevIndex, text.length);
      return <span>{parseChildren(text.slice(prevIndex, text.length), [], todo)}</span>;
    }
  }
  let result = parseGeneric(text, targetArray, /([*][*][^*]+[*][*])|([_][_][^_]+[_][_])/gi, { preMatch, match, postMatch });

  //<p>...<img>...</p> is allowed (without intermediate span), so we check if in todo regardless of result
  if (!result && todo.img) {
    return parseImages(text, targetArray, todo);
  }
}//parseSpans

export { parseImages, parseSpans, parseParagraphs };