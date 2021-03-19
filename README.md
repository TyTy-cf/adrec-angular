# Adrec

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Exercises :

1/ Créer un comonent region-index-materials
Il inclura la partie du tableau des régions, mais celle qui est faite avec Materials

2/ Créer un component region-index qui lui affichera le tableau des régions mais en bootstrap

3/ Inclure les 2 components sur le app.component.html

-- Suite
4/ Epurer le app.component.html afin qu'il n'ai que le router-outlet et le header

5/ Créer un component pour les départements : department-index

5/ Ajouter une route par component :
- 'department' : DepartmentComponent
- 'region/index' : RegionIndex
- 'region/index/materials' : RegionIndexMaterials

6/ Ajouter un component permettant d'afficher le détail d'un department, ce qui permet d'afficher le codeRegion en plus

7/ Ajouter un component region-show qui affiche les attributs de la région, ainsi que ses départements liés, s'il y en a
Sinon, on affichera un template indiquant que la région n'a pas de départements qui lui sont liée

8/ Ajouter le form pour le département (name, code, codeRegion)
codeRegion sera un select qui se basera sur le code des régions existantes

On l'affichera de la même manière que celui du département





