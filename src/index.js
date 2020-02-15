/**
 * ______________________________________________
 *
 * Constants Declarations
 */
const PRODUCTION = false

/**
 * ______________________________________________
 *
 * Function Declarations
 */

interface Siblings {
	el: HTMLCollection,
	siblings: Array<Node>
}

export var findSiblings = function( el ):Siblings {

	if ( ! el ||
		! el.nodeType ||
		! el.nodeType !== 1 ||
		! el.nodeType !== 3 ||
		! el.nodeType !== 9 ) {
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

export var filterEl = function( parent, el ) {

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