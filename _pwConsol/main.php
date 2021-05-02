<?php
/**
 (C) 2014 DJERROUD Halim.
 
 This file is part of pwit.
 
 Pwit is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 Pwit is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with Pwit.  If not, see <http://www.gnu.org/licenses/>.
 */
include '../_pwClass/PwPrefs.Class.php';
include '../_pwClass/PwMisc.Class.php';
$lang = PwPrefs::getInstance ()->getDefaultLang ();

if ($lang == "fr") {
	include 'langFr.php';
} else {
	// include 'LangEn.php';
}

echo " \n";
echo " Pwit Frameworks \n";
echo " V 1.0.0 GPL3 (c)2014 DJERROUD Halim \n";
echo " ===========================================\n";

menu:
echo " \n";
echo " " . Lang::$create_app_0 . ")" . Lang::$create_app_1 . "\n";
echo " " . Lang::$create_table_0 . ")" . Lang::$create_table_1 . "\n";
echo " " . Lang::$create_model_0 . ")" . Lang::$create_model_1 . "\n";
echo " " . Lang::$create_model_and_table_0 . ")" . Lang::$create_model_and_table_1 . "\n";
echo " " . Lang::$create_controler_0 . ")" . Lang::$create_controler_1 . "\n";
echo " " . Lang::$create_view_0 . ")" . Lang::$create_view_1 . "\n";
echo " " . Lang::$show_menu_0 . ")" . Lang::$show_menu_1 . "\n";
echo " " . Lang::$chek_config_0 . ")" . Lang::$chek_config_1 . "\n";
echo " " . Lang::$exit_0 . ")" . Lang::$exit_1 . "\n";

while ( 1 ) {
	echo Lang::$promp;
	$cmd = fgets ( STDIN );
	
	switch ($cmd) {
		case Lang::$create_table_0 :
			create_table ();
			break;
		
		case Lang::$create_controler_0 :
			create_controler ();
			break;
		
		case Lang::$create_app_0 :
			creatApp ();
			break;
		
		case Lang::$create_view_0 :
			create_view ();
			break;
		
		case Lang::$create_model_0 :
			create_model ();
			break;
		
		case Lang::$create_model_and_table_0 :
			;
			break;
		
		case Lang::$show_menu_0 :
			goto menu;
			break;
		
		case Lang::$exit_0 :
			echo " " . Lang::$exit_msg . "\n";
			return 0;
			break;
		
		case Lang::$chek_config_0 :
			echo choseApp ();
			break;
		
		default :
			echo " " . Lang::$unknow_cmd . "\n";
			break;
	}
}

return 0;

/**
 * creatApp();
 */
function creatApp() {
	echo " \n";
	echo " " . Lang::$enter_app_name . " :";
	$cmd = fgets ( STDIN );
	$cmd = preg_replace ( "#[^a-zA-Z]#", "", $cmd );
	PwMisc::copyDirectory ( "../app", "../" . $cmd ); // TODO : metre dans archive
	echo " \n";
}

/**
 * create_controler();
 */
function create_controler() {
	echo " \n";
	echo " " . Lang::$enter_ctrl_name . " :";
	
	$cmd = fgets ( STDIN );
	
	// $fichier="../_pwArchive/.php";
	// $text=fopen($fichier,'w+') or die("Fichier manquant");
	// $contenu=file_get_contents($fichier);
	// print($contenu);
	// $contenuMod=str_replace('salut', 'copain', $contenu);
	// fwrite($text,$contenuMod);
	// fclose($text);
	
	echo " En traveaux \n";
}

/**
 * create_table();
 */
function create_table() {
	echo " \n";
	echo " " . Lang::$enter_table_name . " :";
	
	$cmd = fgets ( STDIN );
	
	// TODO create app
	
	echo " En traveaux \n";
}

/**
 * choseApp
 */
function choseApp() {
	$dir = "../";
	$root = scandir ( $dir );
	foreach ( $root as $value ) {
		if ($value === '.' || $value === '..') {
			continue;
		}
		if (! is_file ( "$dir/$value" )) {
			$result [] = "$dir/$value";
			continue;
		}
	}
	$notIn = array (
			"..//rsrc",
			"..//pwModels" 
	);
	
	$listApp = array ();
	foreach ( $result as $key => $val ) {
		
		if ((substr ( $val, 0, 5 ) != '..//.') && (substr ( $val, 0, 5 ) != '..//_') && (in_array ( $val, $notIn ) == false)) {
			$listApp [] = substr ( $result [$key], 4 );
		}
	}
	echo " " . Lang::$applist . " : \n ";
	foreach ( $listApp as $key => $val ) {
		echo " ";
		echo $key + 1 . " ) " . $val . "\n";
	}
	
	do {
		echo " " . Lang::$chose_app . " :";
		$cmd = fgets ( STDIN );
		$cmd = preg_replace ( "#[^0-9]#", "", $cmd );
	} while ( $cmd > count ( $listApp ) || $cmd <= 0 );
	
	return $listApp [$cmd - 1];
}
function create_view() {
	echo " " . Lang::$enter_view_name . " \n ";
	$cmd = fgets ( STDIN );
}
function create_model() {
	echo " " . Lang::$enter_model_name . " \n ";
	$cmd = fgets ( STDIN );
}

