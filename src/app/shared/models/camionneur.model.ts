export class Camionneur{
  public nom:string;
  public prenom:string;
  public utilisateur:string;
  public motDePasse:string;

  constructor(nom: string, prenom: string, utilisateur: string, motDePasse: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.utilisateur = utilisateur;
    this.motDePasse = motDePasse;
  }

}
