<?php

namespace App\User\Controller\Api;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserController extends Controller
{
    /**
     * @Route("/api/user/me", name="getUser")
     */
    public function me()
    {
        return JsonResponse::create($this->getUser()->toArray());
    }
}
