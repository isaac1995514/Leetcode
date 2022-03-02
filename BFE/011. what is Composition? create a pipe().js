

/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
 function pipe(funcs) {
	return (x) => {
		return funcs.reduce((acc, func) => func(acc), x)
	}
}

