/**
 * CodeLine is used to  
 */
class CodeLine {
	/**
	* CodeLine is used to
	* @param json - a json object containing initial inputs
	*/
	constructor (json) {
		this.loadJSON(json);
	}

	/**
	* loads in information and updates the CodeLine/
	* @param json - a json object containing more information about this CodeLine
	*/
	loadJSON(json) {
		json = json === undefined ? {} : json;
		this.txt = json.txt === undefined ? "\n" : json.txt;

	}
	//------------------------------------------------------------- Getters and Setters
	
	get isNextToRun() {
		return this._isNextToRun;
	}
	set isNextToRun(new_isNextToRun) {
		this._isNextToRun = new_isNextToRun;
	}
	get txt() {
		return this._txt;
	}
	set txt(new_txt) {
		this._txt = new_txt;
	}

	//------------------------------------------------------------- helpers

}