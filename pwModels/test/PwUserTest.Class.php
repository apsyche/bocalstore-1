<?php
require_once "../PwClass/PwInit.php";
class MwExampleTest extends PHPUnit_Framework_TestCase {
	const login = "cyberjunky";
	const pass = "paradox";
	function setUp() {
		require_once "PwUser.Class.php";
	}
	function testCheckPasswordTrue() {
		$pass = md5 ( self::pass );
		$this->assertEquals ( true, MwUser::checkPassword ( self::login, $pass, $id ) );
		$this->assertEquals ( '1', $id );
	}
	function testCheckPasswordFalse() {
		$pass = self::pass;
		$this->assertEquals ( false, MwUser::checkPassword ( self::login, $pass ) );
	}
	function testDataUser() {
		$usr = new MwUser ( 1 );
		$this->assertEquals ( 'Halim', $usr->USR_FIRST_NAME );
		$this->assertEquals ( 'DJERROUD', $usr->USR_LAST_NAME );
	}
} 
