# bocalstore


#Configuration 

ajouter au fichier config apache 000-default.conf les lignes suivantes : 

        <Directory /var/www/>
                Options Indexes FollowSymLinks Multiviews
                AllowOverride All
                Order allow,deny
                allow from all
        </Directory>


## activer modrewrite 
$ systemctl restart apache2


## autoriser le dossier 
$ chmod -R 777 app/_compil
$ chmod -R 777 app/_cache