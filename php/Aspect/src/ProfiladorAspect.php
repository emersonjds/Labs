<?php 

namespace Aspect;

use Go\Aop\Aspect;
use Go\Aop\Intercept\MethodInvocation;
use Go\Lang\Annotation\Before;
use Go\Lang\Annotation\After;

class ProfiladorAspect implements Aspect {
	protected $objects = [];

	/**
	*
	*@param MethodInvocation $invocation Invocation
	*@Before("execution(public Aspect\*->*(*))")
	*/
	public function beforeMethodExecution(MethodInvocation $invocation) {
		$obj = $invocation->getThis();
		$id = spl_object_hash($obj);
		$this->objects[$id] = time();
	}


	/**
     *
     * @param MethodInvocation $invocation Invocation
     * @After("execution(public Aspect\*->*(*))")
     */
	public function afterMethodExecution(MethodInvocation $invocation) {
		$obj = $invocation->getThis();
		$id = spl_object_hash($obj);

		$total = time() - $this->objects[$id];

		$class = get_class($obj);
		$method = $invocation->getMethod()->getName();

		echo "O método {$method} da classe {$class} levou {$total} para ser executado \n";
	}
}