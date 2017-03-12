import {PointTrajet} from "./point-trajet.model";
export class Camion{
  public nom:String;
  public marque:String;
  public plaque:String;
  public trajet:PointTrajet[];

  constructor(nom: String, marque: String, plaque: String,trajet:PointTrajet[]) {
    this.nom = nom;
    this.marque = marque;
    this.plaque = plaque;
    this.trajet = trajet;
  }

}
