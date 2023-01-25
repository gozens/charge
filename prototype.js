var classs = {
    moy: function() {
        var sum= 0
        for (i= 0; i<this.note.length;i++){
            sum += this.note[i]
        }
        moy1 = sum/ this.note.length
        moy1 = moy1.toFixed(0)
        return ('moyenne de '+this.nom+' est '+moy1)
    }
}
// poto 1 methode
x = Object.create(classs)
x.nom = 'astou'
x.note = [15,6,20]

y = {
    nom:'tosten',
    note:[20,20,0]
}
// proto 2 methode
y.__proto__ = classs

// constructeur
var Eleve = function (nom,note,color){
    this.nom = nom
    this.note = note
    if (color != undefined){
        this.color = color
    }
    else{
        let cl = ['red','pink','yellow','gold']
        let x = Math.ceil(Math.random()*3) -1
        this.color = cl[x]
    }
}
// toujours utiler le new quand on instancier un nouveul objet
luc = new Eleve('luc',[9,10,17])
marc = new Eleve('marc',color='gray')

// prototype 

Eleve.prototype.moy = function() {
    var sum= 0
        for (i= 0; i<this.note.length;i++){
        sum += this.note[i]
        }
        moy1 = sum/ this.note.length
        yy = moy1.toFixed(0)
        moy1 = moy1.toFixed(0)
        return ('moyenne de '+this.nom+' est '+moy1)
}
Eleve.prototype.admin = function (){
    var sum= 0
    for (i= 0; i<this.note.length;i++){
        sum += this.note[i]
        }
    moy1 = sum/ this.note.length
    if (moy1 >=10 ) {
            return ('l\'eleve '+this.nom+' est admit')}
    else if (moy1 <=10 ){
            return ('l\'eleve '+this.nom+' est refuser')
        }
    else{
        return ('l\'eleve '+this.nom+' n\'a pas de note')
    }
}
Eleve.prototype.addColor = function(cl){
    this.color = [this.color]
    this.color[this.color.length] = cl
    return 'terminer'
}