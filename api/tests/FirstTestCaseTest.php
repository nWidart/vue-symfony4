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

        $this->client = static::createClient();
        $this->client->disableReboot();

        $this->container = self::$kernel->getContainer();
        $this->entityManager = $this->container->get('doctrine')->getManager();

        $metadatas = $this->getMetadatas();

        if (! empty($metadatas)) {
            // Create SchemaTool
            $tool = new SchemaTool($this->entityManager);
            $tool->createSchema($metadatas);
        } else {
            throw new Doctrine\DBAL\Schema\SchemaException('No Metadata Classes to process.');
        }

        parent::setUp();
    }

    protected function getMetadatas()
    {
        return $this->entityManager->getMetadataFactory()->getAllMetadata();
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
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $this->createAuthenticatedClient();

        $this->client->request('GET', '/api/users');
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
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
        $this->client->request(
            'POST',
            '/api/login_check',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode(array(
                'username' => $username,
                'password' => $password,
            ))
        );

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->client->setServerParameter('HTTP_Authorization', sprintf('Bearer %s', $data['token']));
    }
}
