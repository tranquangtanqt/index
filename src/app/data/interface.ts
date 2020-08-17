export interface ITableOfContentDetail {
	idDetail: number;
	gotoElementDetail: String;
	titleDetail: String;
}

export interface ITableOfContent {
	id: number;
	title: String;
	gotoElement: String;
	details ?: ITableOfContentDetail [];
}

export interface IPattern {
	id: number;
	pattern: String;
	contentCode: String;
}

export interface IWords {
	id: number;
	audio? : String;
	hiragana?: String;
	roumaji?: String;
	kanji?: String;
	meaning?: String;
}