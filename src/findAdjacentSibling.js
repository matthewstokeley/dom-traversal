/**
 * 
 * @param  {Node} parent
 * @param  {Node|String} el
 * @return {Node|Bool}
 */
export default var findAdjacentSibling = function findAdjacentSibling( 
	parent, 
	el ) {

	if ( ! el ||
		  ! el.nodeType !== 1 ) {

		return false
	}

	if ( parent.chilren &&
			parent.children[ 0 ] ) {

		for ( let i = 0; i < parent.children.length; i++ ) {
			if (parent.children[ i ] === el ) {
				return parent.children[ i + 1 ]
			}
		}

		return false

	}

	return false

}