var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
var models = require('../models');

//constantes
const EMAIL_REGEX= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Routes
module.exports ={
    register: function(req, res) {
        //Params
        var email_utilisateur =req.body.email_utilisateur;
        var password_utilisateur =req.body.password_utilisateur;
        var nom_utilisateur = req.body.nom_utilisateur;
        var prenom_utilisateur = req.body.prenom_utilisateur;
        var sex_utilisateur= req.body.sex_utilisateur;
        var date_de_naissance_utilisateur= req.body.date_de_naissance_utilisateur;
        var numero_rue_utlisateur= req.body.numero_rue_utlisateur;
        var adresse_utilisateur= req.body.adresse_utilisateur;
        var ville_utilisateur= req.body.ville_utilisateur;
        var code_postal_utilisateur=req.body.code_postal_utilisateur;
        var pays_utilisateur= req.body.pays_utilisateur;
        var image_avatar_utilisateur= req.body.image_avatar_utilisateur;

        if (email_utilisateur ==null|| password_utilisateur ==null||nom_utilisateur ==null||prenom_utilisateur ==null||sex_utilisateur ==null||date_de_naissance_utilisateur ==null||numero_rue_utlisateur ==null||adresse_utilisateur ==null||ville_utilisateur ==null||code_postal_utilisateur ==null||pays_utilisateur ==null||image_avatar_utilisateur ==null){
            return res.status(400).json({'error': 'il manque des parametres'});
        }
        if (email_utilisateur.length >=40|| email_utilisateur.length <=4){
        return res.status(400).json({'error': 'Email trop petit ou trop long (4 carateres mini et 40 caracteres max'});
        }
        if (!EMAIL_REGEX.test(email_utilisateur)){
            return res.status(400).json({ 'error':'Email non correct'})
        }
        if (!PASSWORD_REGEX.test(password_utilisateur)){
            return res.status(400).json({ 'error':' Mot de passe trop faible'})
        }
        models.utilisateur.findOne({
            attributes:['email_utilisateur'],
            where : {email_utilisateur: email_utilisateur}
        })
        .then(function(userFound){
            if (!userFound){
                bcrypt.hash(password_utilisateur, 5, function(err,bcrytedPassword){
                    var newUser = models.utilisateur.create({
                        email_utilisateur: email_utilisateur,
                        password_utilisateur: bcrytedPassword,
                        nom_utilisateur: nom_utilisateur,
                        prenom_utilisateur: prenom_utilisateur,
                        sex_utilisateur: sex_utilisateur,
                        date_de_naissance_utilisateur: date_de_naissance_utilisateur,
                        numero_rue_utlisateur: numero_rue_utlisateur,
                        adresse_utilisateur: adresse_utilisateur,
                        ville_utilisateur: ville_utilisateur,
                        code_postal_utilisateur: code_postal_utilisateur,
                        pays_utilisateur: pays_utilisateur,
                        image_avatar_utilisateur: image_avatar_utilisateur
                    })
                    .then(function(newUser){
                        return res.status(201).json({
                            'Succès': 'Félécitation '+newUser.nom_utilisateur +' '+newUser.prenom_utilisateur + ' pour votre inscription !'
                        })
                    })
                    .catch(function(err){
                        return res.status(500).json({'error': err+'immposible d ajouter l utilisateur'});
                    });
                });
            }else{
                return res.status(400).json({'error': 'l utilisateur existe deja'})
            }
        })
        .catch(function(err){
            return res.status(400).json({'error': 'impssible de verifier l utilisateur'})
        })
    },
    login : function(req,res) {
        var email_utilisateur = req.body.email_utilisateur;
        var password_utilisateur = req.body.password_utilisateur;

        if (email_utilisateur== null|| password_utilisateur==null ){
            return res.status(400).json({ 'error': 'il manque des parametres'});
        }
        models.utilisateur.findOne({
            where: { email_utilisateur: email_utilisateur }
        })
        .then(function(userFound){
            if (userFound){
                bcrypt.compare(password_utilisateur, userFound.password_utilisateur, function(errBycrypt, resBycrypt){
                    if(resBycrypt) {
                        return res.status(200).json({
                            'Votre email est ': userFound.email_utilisateur,
                            'token': jwtUtils.generateTokenForUser(userFound) 
                        });
                    } else{
                        return res.status(403).json({ "error": "Mauvais mot de passe "});
                    }
                });
            }else{
                return res.status(404).json({ 'error': 'l utisitaeur est pas dans la base de donnees'});
            }
        })
        .catch(function(err){
            return res.status(500).json({ 'error': 'impossible de vérifier l utilisateur'});
        });
    }
}