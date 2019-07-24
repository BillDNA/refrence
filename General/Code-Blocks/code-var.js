/**
 * CodeVar is used to  
 */
class CodeVar {
	/**
	* CodeVar is used to
	* @param json - a json object containing initial inputs
	*/
	constructor (json) {
		this.loadJSON(json);
	}

	/**
	* loads in information and updates the CodeVar/
	* @param json - a json object containing more information about this CodeVar
	*/
	loadJSON(json) {
		json = json === undefined ? {} : json;
	}
	//------------------------------------------------------------- Getters and Setters
	get changedFlag() {
		return this._changedFlag;
	}
	set changedFlag(new_changedFlag) {
		this._changedFlag = new_changedFlag;
	}
	get val() {
		return this._val;
	}
	set val(new_val) {
		this._val = new_val;
	}
	get kind() {
		return this._kind;
	}
	set kind(new_kind) {
		this._kind = new_kind;
	}
	//------------------------------------------------------------- helpers

}