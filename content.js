// selectors for comments
var selectors = ['#content-text'];

// builds a string with random herps and derps
var mutatedString = function() {
  var randomLength = Math.ceil(Math.random()*10);
  var returnString = '';

  for (x=0; x<=randomLength; x++) {
    returnString += "la";
  }
  
  return returnString;
}

// derps a comment
var mutateComment = function(comment) {
    // preserve the original contents
    comment.originalText = comment.textContent;

    /* comment.onclick = function() {
      comment.textContent = comment.originalText;
    }; */
    
    // add mutated class
    comment.classList.add('mutated');

    // change the contents
    comment.textContent = mutatedString();
}

// build the full selector string
var derpSelectorString = selectors.map(function(sel) {
  return sel + ':not(.mutated)';
}).join(", ");

// every 100 milliseconds, derp any un-mutated elements
setInterval(function() {
  document.querySelectorAll(derpSelectorString).forEach(mutateComment);
}, 100);