<?php

namespace App\Tests;

class FirstTestCaseTest extends BaseApiTest
{
    /**
     * test getUsersAction
     */
    public function testGetUsers()
    {
        $this->createUser();

        $this->createAuthenticatedClient();

        $this->client->request('GET', '/api/users');
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
    }
}
