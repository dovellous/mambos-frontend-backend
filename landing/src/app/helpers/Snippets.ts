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
	
	},
	elements: {
		scrollTo: (id:any)=>{

			const yOffset:any = -280;
			const element:any = document.getElementById(id);
			const y:any = element.getBoundingClientRect().top + window.scrollY + yOffset;

			window.scrollTo({top: y, behavior: 'smooth'});

		}
	}
}

export default Snippets;