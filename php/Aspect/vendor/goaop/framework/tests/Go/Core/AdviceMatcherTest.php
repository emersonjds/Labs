<?php

namespace Go\Core;

use Doctrine\Common\Annotations\Reader;
use Go\Aop\Advice;
use Go\Aop\Advisor;
use Go\Aop\Pointcut;
use Go\Aop\Support\DefaultPointcutAdvisor;
use Go\Aop\Support\TruePointFilter;
use PHPUnit_Framework_TestCase as TestCase;
use TokenReflection\Broker;

class AdviceMatcherTest extends TestCase
{
    /**
     * @var null|AdviceMatcher
     */
    protected $adviceMatcher = null;

    protected $reflectionClass = null;

    protected function setUp()
    {
        $container = $this->getMock(AspectContainer::class);
        $reader    = $this->getMock(Reader::class);
        $loader    = $this->getMock(AspectLoader::class, [], array($container, $reader));

        $this->adviceMatcher = new AdviceMatcher($loader, $container);

        $brokerInstance = new Broker(new Broker\Backend\Memory());
        $brokerInstance->processFile(__FILE__);
        $this->reflectionClass = $brokerInstance->getClass(__CLASS__);
    }

    /**
     * Verifies that empty result will be returned without aspects and advisors
     */
    public function testGetEmptyAdvicesForClass()
    {
        // by reflection
        $advices = $this->adviceMatcher->getAdvicesForClass($this->reflectionClass, []);
        $this->assertEmpty($advices);
    }

    /**
     * Check that list of advices for method works correctly
     */
    public function testGetSingleMethodAdviceForClassFromAdvisor()
    {
        $funcName = __FUNCTION__;

        $pointcut = $this->getMock(Pointcut::class);
        $pointcut
            ->expects($this->any())
            ->method('getClassFilter')
            ->will($this->returnValue(TruePointFilter::getInstance()));
        $pointcut
            ->expects($this->any())
            ->method('matches')
            ->will($this->returnCallback(function ($point) use ($funcName) {
                return $point->name === $funcName;
            }));
        $pointcut
            ->expects($this->any())
            ->method('getKind')
            ->will($this->returnValue(Pointcut::KIND_METHOD));

        $advice = $this->getMock(Advice::class);
        $advisor = new DefaultPointcutAdvisor($pointcut, $advice);

        $advices = $this->adviceMatcher->getAdvicesForClass($this->reflectionClass, array($advisor));
        $this->assertArrayHasKey(AspectContainer::METHOD_PREFIX, $advices);
        $this->assertArrayHasKey($funcName, $advices[AspectContainer::METHOD_PREFIX]);
        $this->assertCount(1, $advices[AspectContainer::METHOD_PREFIX]);
    }

    /**
     * Check that list of advices for fields works correctly
     */
    public function testGetSinglePropertyAdviceForClassFromAdvisor()
    {
        $propName = 'adviceMatcher'; // $this->adviceMatcher;

        $pointcut = $this->getMock(Pointcut::class);
        $pointcut
            ->expects($this->any())
            ->method('getClassFilter')
            ->will($this->returnValue(TruePointFilter::getInstance()));
        $pointcut
            ->expects($this->any())
            ->method('matches')
            ->will($this->returnCallback(function ($point) use ($propName) {
                return $point->name === $propName;
            }));
        $pointcut
            ->expects($this->any())
            ->method('getKind')
            ->will($this->returnValue(Pointcut::KIND_PROPERTY));

        $advice = $this->getMock(Advice::class);
        $advisor = new DefaultPointcutAdvisor($pointcut, $advice);

        $advices = $this->adviceMatcher->getAdvicesForClass($this->reflectionClass, array($advisor));
        $this->assertArrayHasKey(AspectContainer::PROPERTY_PREFIX, $advices);
        $this->assertArrayHasKey($propName, $advices[AspectContainer::PROPERTY_PREFIX]);
        $this->assertCount(1, $advices[AspectContainer::PROPERTY_PREFIX]);
    }
}
