const Snippets:any = {
	strings: {
	
	},
	arrays: {
	
	},
	objects: {
		convertToArray: (obj:any) : any => {
			//console.warn(":: OBJ ::", obj);
			const arr: any = Object.keys(obj).map((key:string) => [key, obj[key]]);
			//console.warn(":: ARR ::", arr);
			return arr;
		}
	},
	numbers: {
	
	},
	utils: {
	
	},
	session: {
	
	},
	cookies: {
	
	},
	storage: {
	
	}
}

export default Snippets;