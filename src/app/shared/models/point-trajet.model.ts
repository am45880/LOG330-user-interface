export class PointTrajet{
  public article:string;
  public codePostal:string;
  public tempsEstime:string;
  public ordre:number;

  constructor(article: string, codePostal: string, tempsEstime: string, ordre: number) {
    this.article = article;
    this.codePostal = codePostal;
    this.tempsEstime = tempsEstime;
    this.ordre = ordre;
  }
}
