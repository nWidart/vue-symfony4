<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class HomeController
{
    /**
     * @Route("/", name="homepage")
     * @Route("/{route}", name="vue_sub_pages", requirements={"route"="^(?!api).+"})
     */
    public function index(\Twig_Environment $twig): Response
    {
        return new Response($twig->render('home.html.twig'));
    }
}
