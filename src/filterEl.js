/**
 * 
 * @param  {Node} parent
 * @param  {Node|String} el
 * @return {Bool}
 */
export default var filterEl = function filterEl( 
	parent, 
	el ) {

	if ( ! el ||
		 ! el.nodeType ) {
		return false
	}

	if ( parent.children[ 0 ] ) {
		for ( let i = 0; i < parent.children.length) {
			if ( parent.children[ i ] === el )
				return true
		}
	}

	return false
}
