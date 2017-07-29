export interface Memo {
    uid: string;
    author: string;                 // 작성자
    title: string;                  // 제목
    contents: string;               // 본문
    publishedDate: Date;           // 작성일
    recentUpdatedDate: Date;      // 최근 수정일
}