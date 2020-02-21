/**
 * 
 * @param  {Node} parent
 * @param  {Node|String} el
 * @return {Siblings}
 */
export default var findSiblings = function findSiblings( el ):Siblings {

	if ( ! el ||
		! el.nodeType ||
		! el.nodeType !== 1 ||
		! el.nodeType !== 3 ||
		! el.nodeType !== 9 ) {

		if ( ! PRODUCTION ) {
			throw new Error( 'INVALID ARGUMENT TYPE' )
		}

		return false
	}

	let node = document.getParentNode( el )

	let res: Siblings = {}

	res.el = el

	if ( node && node.children ) {

		let filter = ( child ) => child === el

		for ( let i = 0; i < node.children ) {
			if ( ! filter ( node.childen[ i ] ) ) {
				res.siblings.push( node.children[ i ] )
			}
		}
	}
	return res

}