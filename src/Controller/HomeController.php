<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class HomeController
{
    /**
     * @Route("/", name="home")
     */
    public function index(\Twig_Environment $twig)
    {
        return new Response($twig->render('home.html.twig'));
    }
}
