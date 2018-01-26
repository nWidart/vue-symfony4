<?php

namespace App\Tests;

use App\Entity\User;
use Doctrine\DBAL\Schema\SchemaException;
use Doctrine\ORM\Tools\SchemaTool;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\DependencyInjection\ContainerInterface;

abstract class BaseApiTest extends WebTestCase
{
    /**
     * @var \Symfony\Bundle\FrameworkBundle\Client
     */
    public $client;
    /**
     * @var ContainerInterface
     */
    public $container;
    /**
     * @var \Doctrine\Common\Persistence\ObjectManager
     */
    public $entityManager;

    public function setUp()
    {
        self::bootKernel();

        $this->client = static::createClient();
        $this->client->disableReboot();

        $this->container = self::$kernel->getContainer();
        $this->entityManager = $this->container->get('doctrine')->getManager();

        $metadatas = $this->getMetaDatas();

        if (! empty($metadatas)) {
            $tool = new SchemaTool($this->entityManager);
            $tool->createSchema($metadatas);
        } else {
            throw new SchemaException('No Metadata Classes to process.');
        }

        parent::setUp();
    }

    /**
     * Create a client with a default Authorization header.
     *
     * @param string $username
     * @param string $password
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

    public function createUser($username = 'user', $email = 'john@doe.com', $password = 'password'): User
    {
        $user = new User();
        $user->setUsername($username);
        $user->setEmail($email);
        $user->setPassword($password);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $user;
    }

    private function getMetaDatas()
    {
        return $this->entityManager->getMetadataFactory()->getAllMetadata();
    }
}
