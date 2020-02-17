/**
 * ______________________________________________
 *
 * Constants Declarations
 */
const PRODUCTION = false

/**
 * ______________________________________________
 *
 * Type Declarations
 */

interface Siblings {
	el: HTMLCollection,
	siblings: Array<Node>
}

/**
 * ______________________________________________
 *
 *  Function Declarations
 *
 *  Using non-anonymous functions leads to very nice
 *  stack traces. 
 */

/**
 * 
 * @param  {Node} parent
 * @param  {Node|String} el
 * @return {Siblings}
 */
export var findSiblings = function findSiblings( el ):Siblings {

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

/**
 * 
 * @param  {Node} parent
 * @param  {Node|String} el
 * @return {Bool}
 */
export var filterEl = function filterEl( 
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

/**
 * 
 * @param  {Node} parent
 * @param  {Node|String} el
 * @return {Node|Bool}
 */
export var findAdjacentSibling = function findAdjacentSibling( 
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

export var findSiblingsWithClassName = function findSiblingsIfInNode(
	): Object {

}

/**
 * cache siblings query with a resolver 
 * 
 * @param  {Function} fn 
 * @param  {Function} resolver 
 * @return {Function} 
 */
export var findSiblingsCache = function cached (
  fn: Function,
  resolver: Function
): Function {
   const cache = new WeakMap()
   return (function( siblings: Siblings ) {
     const key = resolver ? resolver(str) : str
     return cache.has(key) 
       ? cache.get(key)
       : cache.set(key, fn(str))
    })
}

/**
 * 
 * @param  {Node} parent
 * @param  {Node} el
 * @param  {String} attr
 * @return {Siblings} 
 */
export var findSiblingsWithAtt = function findSiblingsWithAttr(
	parent: Object,
	el: Object,
	attr: String
) {
	if ( ! el ||
		 ! el.nodeType !== 1 ||
		 ! el.nodeType !== 9 ) {

		return false;

	}

	let out: Siblings = []

	if ( parent.children ) {

		for ( let i = 0; i < parent.children.length; i++ ) {
			let child = parent.children[ i ];

			if ( child !== el 
			 && child.dataset[ attr ] ) {
				out.push( child )
			}
		}
	}

	return out;
}

export var findSiblingsWithoutAttr = function findSiblingsWIthoutAttr(
	parent: Object,
	el: Object,
	attr: String
) {

	if ( ! el ||
		 ! el.nodeType !== 1 ||
		 ! el.nodeType !== 9 ) {

		return false;

	}

	let out: Siblings = []

	if ( parent.children ) {

		for ( let i = 0; i < parent.children.length; i++ ) {
			let child = parent.children[ i ];

			if ( child !== el )
			 && ! child.dataset[ attr ] ) {
				out.push( child )
			}
		}
	}

	return out;
}
