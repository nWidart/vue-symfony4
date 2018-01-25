<?php

namespace App\Tests;

use App\Entity\User;
use Doctrine\ORM\Tools\SchemaTool;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpKernel\KernelInterface;

class FirstTestCaseTest extends WebTestCase
{
    public function setUp()
    {
        self::bootKernel();

        self::prime(self::$kernel);
    }
    /**
     * test getUsersAction
     */
    public function testGetUsers()
    {
        $user = new User();
        $user->setEmail('john@doe.com');
        $user->setIsActive(1);
        $user->setUsername('user');
        $user->setPassword('password');
        $em = self::$kernel->getContainer()->get('doctrine')->getManager();
        $em->persist($user);
        $em->flush();
        var_dump($em->getRepository(User::class)->findAll());

        $client = $this->createAuthenticatedClient();
        $client->request('GET', '/api/users');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    /**
     * Create a client with a default Authorization header.
     *
     * @param string $username
     * @param string $password
     *
     * @return \Symfony\Bundle\FrameworkBundle\Client
     */
    protected function createAuthenticatedClient($username = 'user', $password = 'password')
    {
        $client = static::createClient();
        $client->request(
            'POST',
            '/api/login_check',
            array(
                '_username' => $username,
                '_password' => $password,
            )
        );

        $data = json_decode($client->getResponse()->getContent(), true);

        $client = static::createClient();
        $client->setServerParameter('HTTP_Authorization', sprintf('Bearer %s', $data['token']));

        return $client;
    }

    public static function prime(KernelInterface $kernel)
    {
        // Make sure we are in the test environment
        if ('test' !== $kernel->getEnvironment()) {
            throw new \LogicException('Primer must be executed in the test environment');
        }

        // Get the entity manager from the service container
        $entityManager = $kernel->getContainer()->get('doctrine.orm.entity_manager');

        // Run the schema update tool using our entity metadata
        $metadatas = $entityManager->getMetadataFactory()->getAllMetadata();

        $schemaTool = new SchemaTool($entityManager);
        $schemaTool->updateSchema($metadatas);

        // If you are using the Doctrine Fixtures Bundle you could load these here
    }
}
