<?php
/*
 * Go! AOP framework
 *
 * @copyright Copyright 2012, Lisachenko Alexander <lisachenko.it@gmail.com>
 *
 * This source file is subject to the license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Go\Aop\Support;

use ReflectionClass;
use Go\Aop\PointFilter;
use TokenReflection\ReflectionClass as ParsedReflectionClass;

/**
 * Inheritance class matcher that match single class name or any subclass
 */
class InheritanceClassFilter implements PointFilter
{

    /**
     * Instance class name to match
     *
     * @var string
     */
    protected $parentClass = '';

    /**
     * Inheritance class matcher constructor
     *
     * @param string $parentClassName Name of the parent class or interface to match
     */
    public function __construct($parentClassName)
    {
        $this->parentClass = $parentClassName;
    }

    /**
     * Performs matching of point of code
     *
     * @param mixed $class Specific part of code, can be any Reflection class
     * @param null|mixed $context Related context, can be class or namespace
     * @param null|string|object $instance Invocation instance or string for static calls
     * @param null|array $arguments Dynamic arguments for method
     *
     * @return bool
     */
    public function matches($class, $context = null, $instance = null, array $arguments = null)
    {
        /** @var $point ReflectionClass|ParsedReflectionClass */
        if (!$class instanceof ReflectionClass && !$class instanceof ParsedReflectionClass) {
            return false;
        }

        return $class->isSubclassOf($this->parentClass) || in_array($this->parentClass, $class->getInterfaceNames());
    }

    /**
     * Returns the kind of point filter
     *
     * @return integer
     */
    public function getKind()
    {
        return self::KIND_CLASS;
    }
}
