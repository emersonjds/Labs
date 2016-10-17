<?php 

require_once("vendor/autoload.php");

use Aspect\ApplicationAspectKernel;

$applicationAspectKernel = ApplicationAspectKernel::getInstance();
$applicationAspectKernel->init(array(
	"cacheDir" => "/tmp/",
	"includePaths" => array(
		__DIR__ . '/src/'
		)
	));

$a = new Aspect\ClasseA();
$a->executa();

$b = new Aspect\ClasseB();
$b->executa();
