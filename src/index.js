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

type Sibling: Object;

interface DataAttribute {
	name: String
}

interface Children {

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
 * @param  {Node}
 * @param  {Node|String}
 * 
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

	if ( node && node.hasChildNodes() ) {

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
 * @param  {Node}
 * @param  {Node|String}
 * 
 * @return {Bool}
 */
export var filterEl = function filterEl( 
	parent, 
	el ) {

	if ( ! el ||
		 ! el.nodeType ) {
		return false
	}

	if ( parent.hasChildNodes() ) {

		for ( let i = 0; i < parent.children.length) {
			if ( parent.children[ i ] === el )
				return true
		}
	}

	return false
}

/**
 * 
 * @param  {Node}
 * @param  {Node|String}
 * 
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
 * @param  {Function}
 * @param  {Function}
 * 
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
 * @param  {Node}
 * @param  {Node}
 * @param  {String}
 * 
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

	if ( parent.hasChildNodes() ) {

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

/**
 * 
 * 
 * @param {Object} 
 * @param {Object}
 * @param {String}
 * 
 * @return {Array|Bool}
 */
export var findSiblingsWithClassName = function findSiblingsWithClassName(
	parent: Object,
	el: Object,
	className: String
	) {
 
	if ( ! el || 
		 ! el.nodeType !== 9 ) {
		return false
	}

	if ( parent.hasChildNodes() ) {

		let arr = Array.prototype.splice.call( parent.children )

		return arr.filter( ( vel, index, array ) => {

			if ( val !== el && 
				 val.className.has( className ) ) {
				return true
			}
		} )

	}

	return false

}

export var findSiblingsWithoutClassName = function findSiblingsWithoutClassName(

) {

}

export var isNodeParent = function isNodeParent( 
	node: Object,
	el: Object
): Bool {

	if ( ! node ||
		 ! node.children ) {
		return false
	}


	if ( el.nodeType === 9 ) {

		for ( let i = 0; i < node.children; i++ ) {
			if ( node.children[ i ] === el ) {
				return true
			}
		}



	}
	return false

}

/**
 * 
 * @param {Object} 
 * @param {Object} 
 * @param {String}
 *
 * @return {Siblings|Bool}
 */
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

	if ( parent.hasChildNodes() ) {

		for ( let i = 0, out: Siblings = []; i < parent.children.length; i++ ) {
			let child = parent.children[ i ];

			if ( child !== el && 
				 ! child.dataset[ attr ] ) {
				out.push( child )
			}
		}
	}

	return out;
}

/**
 * 
 * @param  {Node}
 * @param  {Node}
 * @param  {DataAttribute}
 * 
 * @return {Bool}
 */

export var doesChildHaveAttr = function doesChildHAveAttr( 
	node: Node, 
	el: Node, 
	attr: DataAttribute ): Bool {

	if ( ! el || 
		 ! el.nodeType === 9 ) 
		return false

	if ( node.childen &&
			node.childrem.length > 0 ) {

		let res = []

		let _arr = Array.prototype.splice.call( node.children )

		res = _arr.filter( ( value ) => {
			if ( value === el )
				return true
		} )

		return ( res.length > 0 )
	}

}

/**
 * 
 * @param  {Node} 
 * @param  {DataAttribute}
 * 
 * @return {Children|Bool}
 */

export var findChildrenWithAttr = function findChildrenWithAttr(
	node: Node,
	attr: DataAttribute

	): Children | Bool {

	let res: Children = []

	if ( ! node || 
		 ! node.nodeType !== 9 ) {
		return false
	}

	let _children = Array.prototype.splice.call( node.children )

	return res = _children.filter( ( val ) => { val.dataset[ attr.name ] } )

}

/**
 * 
 * @param {Node}
 * @param {Node}
 * @param {DataAttribute}
 *
 * @return {Node|Bool}
 */
export var findAdjacentSiblingWithAttr = function findAdjacentSiblingWithAttr(
	node: Node,
	el: Node,
	attr: DataAttribute

	): Node | Bool {


	if ( ! node ||
		 ! node.nodeType ) {
		return false
	}

	if ( el.nodeType === 9 &&
	     el.dataset[ attr.name ] ) {

		return el.nextSibling()

	}

	return false

}

/**
 * 
 * @param {Node}          node
 * @param {Node}          parent
 * @param {DataAttribute} attr
 *
 * @return {Node}
 */
export var findAdjacentSiblingWhenChildHasAttr = function (
	node: Node,
	parent: Node,
	attr: DataAttribute
	) {

	if ( ! node ||
		 node.nodeType !== 1 ) {
		return false
	}

	let childHasAttr = false

	if ( node.hasChildNodes() ) {

		for ( let i = 0; i < node.children.length; i++ ) {
			if ( node.children[ i ].dataset[ attr ] ) 
				childHasAttr = true
		}

	}

	return ( childHasAttr )
		? node.nextSibling()
		: node

}

/**
 *
 * @param {Node}
 * @param {Node}
 * @param {DataAttribute}
 *
 * @return {Sibling|Bool} returns sibling or false
 */
export var findAdjacentSiblingWhenSiblingContainsChildWithAttr = function(
	node: Node,
	parent: Node,
	attr: DataAttribute
) {
	if ( ! node || 
		 ! node.nodeType ) {
		return false
	} 

	let siblingHasChildWithAttr = false

	let sibling = node.nextSibling()

	if ( sibling.hasChildNodes() ) {

		// iterate through HTMLCollection without casting to array
		for ( let i = 0; i < sibling.children.length; i++ ) {
			if ( sibling.children[ i ].dataset[ attr ] ) {
				return sibling
			}
		}
	
	} 

	return false
}

/**
 * 
 * @param {Node}
 * @param {Node}
 * @param {DataAttribute}
 *
 * @return {Sibling}
 */
export var findSiblingIfContainsChildWithAttr = function(
	node: Node,
	parent: Node,
	attr: DataAttribute
) {

	if ( ! parent ||
		 ! parent.nodeType ) {
		return false
	}

	let _filter = ( el, attr ) => {
		let _el = Array.prototype.splice.call( el );
		
		_el.filter( ( value, index ) => ( value.dataset[ attr ] ) ? true : false )
	}

	let sibling = {}

	let res = []

	for ( let i = 0; i < parent.children.length; i++ ) {

		if ( parent.children[ i ] !== node ) {
			res.push( _filter( parent.children[ i ], attr ) )
			// @todo kind of wonky
			sibling = parent.children[ i ]
		}

	}

	return ( res.length > 0 )
		? sibling
		: {}


}
