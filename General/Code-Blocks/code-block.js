/**
 * CodeBlock is used to  
 */
class CodeBlock {
	/**
	* CodeBlock is used to
	* @param json - a json object containing initial inputs
	*/
	constructor (json) {
		this.loadJSON(json);
	}

	/**
	* loads in information and updates the CodeBlock/
	* @param json - a json object containing more information about this CodeBlock
	*/
	loadJSON(json) {
		json = json === undefined ? {} : json;

		if(this.div === undefined) {
			this.div = createDiv();
			this.div.addClass("code-block");
		}

		if(this.code !== undefined) {
			this.code.remove();
			this.pre.remove();
		}
		this.pre = createElement('pre');
		this.pre.parent(this.div);

		this.code = createElement('code', "");
		this.code.addClass('language-javascript')
		this.code.parent(this.pre);
		//now add the lines
		this._lines = [];
		let code_text = "";
		if(json.code !== undefined) {
			for(let i = 0; i < json.code.length; i++) {
				this._lines.push(new CodeLine(json.code[i]));
				code_text = code_text + this.line(i).txt + "\n";
			}
		}
		this.code.html(code_text);

		//Now Add Buttons top

		//Prism.highlightElement(this.code.elt);
	}
	//------------------------------------------------------------- Getters and Setters

	//------------------------------------------------------------- helpers
	line(number) {
		return this._lines[number];
	}
}