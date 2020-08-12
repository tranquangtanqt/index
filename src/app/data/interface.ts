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